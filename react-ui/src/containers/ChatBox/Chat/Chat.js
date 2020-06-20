import React,{useState,useEffect} from "react";
import classNames from "classnames";
import {Link} from 'react-router-dom';
import queryString from "query-string";
import io from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom'

import { makeStyles } from "@material-ui/core/styles";

import Header from "../../../components/Header/Header.js";
import Footer from "../../../components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import CloseIcon from '@material-ui/icons/Close';
import './Chat.scss'
import Message from "../Message/Message.js";

const useStyles = makeStyles(styles);

const testAPI = () => {
  console.log('enter');
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://jsonplaceholder.typicode.com/todos/1',
    'headers': {
      'Access-Control-Allow-Origin': '*'
    }
  };
  request(options, function (error, response) { 
    if (error) throw new Error(error);
    console.log(response);
  });
}
let socket;

export default function Home(props) {  
  const classes = useStyles();
  const { ...rest } = props;
  const [name,setName]=useState('');
  const [room,setRoom]=useState('');
  const [message,setMessage]=useState('');
  const [messages,setMessages]=useState([]);
  const ENDPOINT='http://localhost:5000/';

  useEffect(()=>{
    const {name ,room}=queryString.parse(props.location.search);
    socket=io(ENDPOINT);
    setRoom(room);
    setName(name);
    socket.emit('join',{name:name,room:room},()=>{

    });
    return()=>{
        socket.emit('disconnect');
        socket.off();
    }
},[ENDPOINT,props.location.search]);

  useEffect(()=>{
  socket.on('message',(message)=>{
      setMessages([...messages,message]);
  })
  },[messages])

  const sendMessage=(event)=>{
    event.preventDefault();
    if(message)
        socket.emit('sendMessage',message,()=>{
            setMessage('');
        })
}
console.log(message,messages);

  return (
    <div>
      <Header
        brand="HEALWARE"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg8.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>HEALWARE</h1>
                <h3 className={classes.subtitle}>
                Artificial Intelligence platform for medical prognosis of severe yet curable diseases.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)} >
        {/* Main Content */}
        <div className="chatBox-container">
        <div className="chatBox">
          <div className="header">
            <div>{room}</div>
            <Link to={`/join`}>
              <div style={{"color":"#ffffff"}}><CloseIcon/></div>
            </Link>
            
          </div>

          <ScrollToBottom>
            {messages.map((message,i)=><div key={i}><Message message={message} name={name}/></div>)}
          </ScrollToBottom>

          <form className="form">
            <input className="input"
             type="text" value={message} 
             onChange={(event)=>setMessage(event.target.value)}
             onKeyPress={event=> event.key==='Enter'?sendMessage(event):null}
             placeholder="Type a message..."></input>
            <button onClick={(event)=>sendMessage(event)} className="sendButton">Send</button>
          </form>

        </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

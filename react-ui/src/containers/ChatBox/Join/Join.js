import React,{useState} from "react";
import classNames from "classnames";
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from'@material-ui/core/TextField';

import { makeStyles } from "@material-ui/core/styles";

import Header from "../../../components/Header/Header.js";
import Footer from "../../../components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import './Join.scss';



const useStyles = makeStyles(styles);

const Join = () => {
  
  
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

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [name,setName]=useState('');
  const [room,setRoom]=useState('');

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
      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* Main Content */}
        <div className="back-button">
          <Link to={`/`}>
          <Button>Back</Button>
          </Link>
        </div>
        
        
        
        <div className="join-box">
       
          <h2>Join a Room to chat!</h2>

            <div className="join-small-box">
              <h3>Join</h3>
              
              <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  color="primary"
                  onChange={(event)=>setName(event.target.value)}
                  /><br></br><br></br><br></br>
                  <TextField
                  id="room"
                  label="Room"
                  variant="outlined"
                  color="primary"
                  onChange={(event)=>setRoom(event.target.value)}
                  /><br></br><br></br><br></br>
                
              
              <Link onClick={event => (!name)|| (!room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                <Button variant="contained" color="primary">
                    Sign In
                </Button>
            </Link>
            </div>
        </div>
        

      </div>
      <Footer />
    </div>
  );
}


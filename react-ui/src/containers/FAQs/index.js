import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FeedbackSharpIcon from "@material-ui/icons/FeedbackSharp";
//import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import Email from "@material-ui/icons/Email";
//import People from "@material-ui/icons/People";
import RateReviewSharpIcon from "@material-ui/icons/RateReviewSharp";
//import AssignmentSharpIcon from "@material-ui/icons/AssignmentSharp";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg.jpg";

const useStyles = makeStyles(styles);



export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const [data, setData] = useState('');
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('');
  // Fetches our GET route from the Express server.
  const callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };
  useEffect(() => {
    // Call our fetch function below once the component mounts
    callBackendAPI()
      .then(res => setData(res.express))
      .catch(err => console.log(err));
  })
  const sendFaq = (templateId, variables) => {
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  const handleSubmit = () => {
    const templateId = 'template_LGzPTnDE';

    const qu = document.getElementById("question").value;
    const em = document.getElementById("email").value;
    const na = document.getElementById("name").value;
    sendFaq(templateId, { message_html: qu, from_name: na, reply_to: em })

  }


  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="HEALWARE"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <form
          action="https://formspree.io/mvowqgqp"
          method="POST"
        >

          <div className={classes.container} style={{ paddingBottom: 100 }}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <Card className={classes[cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <FeedbackSharpIcon />
                      <h3>FAQs</h3>
                    </CardHeader>
                    <p className={classes.divider}>How can we help you?</p>
                    <CardBody>
                      <CustomInput
                        labelText="Your Question..."
                        id="question"
                        value={question}
                        onChange={(event) => setQuestion(event.target.value)}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <RateReviewSharpIcon
                                className={classes.inputIconsColor}
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Name"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <RateReviewSharpIcon
                                className={classes.inputIconsColor}
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" onClick={handleSubmit}>
                        Submit
                    </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </form>
        <Footer whiteFont style={{ marginTop: 0, paddingTop: 0 }} />
      </div>
    </div>
  );
}

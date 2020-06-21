import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/feedback.jpg";
import Model from './model.js'

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
        <div className={classes.container} style={{ paddingBottom: 100 }}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Model />
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont style={{ marginTop: 0, paddingTop: 0 }} />
      </div>
    </div>
  );
}

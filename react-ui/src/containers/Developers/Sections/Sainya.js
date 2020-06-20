import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/sainya.png";

const useStyles = makeStyles(styles);

const github = function() {
  window.location = "https://github.com/sainyagoyal";
};
const linkedin = function() {
  window.location = "https://www.linkedin.com/in/sainya-goyal-043ab71a1/";
};
const facebook = function() {
  window.location = "https://www.facebook.com/sainya.goyal";
};
const instagram = function() {
  window.location = "https://www.instagram.com/sainya09/";
};

export default function Sainya() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <Card plain>
      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
        <img src={team1} alt="..." className={imageClasses} />
      </GridItem>
      <h4 className={classes.cardTitle}>
        Sainya Goyal
        <br />
        <small className={classes.smallTitle}>Server Handler</small>
      </h4>
      <CardBody>
        <p className={classes.description}>
          Back-end Developer proficient in server handling, different frameworks and use of version control, believes in rhythm, process and work cycle. Core Team Member, Development Students Club, RIT Bangalore. 
        </p>
      </CardBody>
      <CardFooter className={classes.justifyCenter}>
        <Button
          justIcon
          color="transparent"
          className={classes.margin5}
          onClick={github}
        >
          <i className={classes.socials + " fab fa-github"} />
        </Button>
        <Button
          justIcon
          color="transparent"
          className={classes.margin5}
          onClick={linkedin}
        >
          <i className={classes.socials + " fab fa-linkedin"} />
        </Button>
        <Button
          justIcon
          color="transparent"
          className={classes.margin5}
          onClick={facebook}
        >
          <i className={classes.socials + " fab fa-facebook"} />
        </Button>
        <Button
          justIcon
          color="transparent"
          className={classes.margin5}
          onClick={instagram}
        >
          <i className={classes.socials + " fab fa-instagram"} />
        </Button>
      </CardFooter>
    </Card>
  );
}

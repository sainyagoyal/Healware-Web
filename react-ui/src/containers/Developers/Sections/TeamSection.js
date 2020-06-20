import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import Ridhish from "./Ridhish.js";
import Sainya from "./Sainya.js";
import Lakshya from "./Lakshya.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Ridhish />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Sainya />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Lakshya />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

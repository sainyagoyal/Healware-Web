/*eslint-disable*/
import React from "react";
import BMI from './HealthCalc/bmi/BMI.js'
import BFC from './HealthCalc/bfc/BFC.js'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



// @material-ui/icons
import FeedbackIcon from '@material-ui/icons/Feedback';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import usemodals from "assets/jss/material-kit-react/components/modalcalcStyle.js";
import AuthButton from './AuthButton.js'

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const classesModal = usemodals();
  const [openbmi, setOpenbmi] = React.useState(false);
  const [openbfc, setOpenbfc] = React.useState(false);

  const handleOpenbmi = () => {
    setOpenbmi(true);
  };

  const handleClosebmi = () => {
    setOpenbmi(false);
  };
  const handleOpenbfc = () => {
    setOpenbfc(true);
  };

  const handleClosebfc = () => {
    setOpenbfc(false);
  };


  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/auth"
          color="transparent"
          className={classes.navLink}
        >
          <ExitToAppIcon /> <AuthButton />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/feedback"
          color="transparent"
          className={classes.navLink}
        >
          <FeedbackIcon /> Feedback
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={handleOpenbmi}
        >
          BMI
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classesModal.modal}
          open={openbmi}
          onClose={handleClosebmi}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openbmi}>
            <div className={classesModal.paper} style={{ "display": "flex", "width": "80%" }}>
              <BMI />
            </div>
          </Fade>
        </Modal>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={handleOpenbfc}
        >
          BFC
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classesModal.modal}
          open={openbfc}
          onClose={handleClosebfc}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openbfc}>
            <div className={classesModal.paper} style={{ "display": "flex", "width": "80%", "max-height": "80%", "overflow": "auto" }}>
              <BFC />
            </div>
          </Fade>
        </Modal>
      </ListItem>
    </List>
  );
}

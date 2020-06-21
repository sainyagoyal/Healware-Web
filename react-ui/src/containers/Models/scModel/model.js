import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import DvrIcon from '@material-ui/icons/Dvr';
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import ModelTest from './modelTest'

const useStyles = makeStyles(styles);

const send = () => {
    return
}

export default function Model(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    return (

        <Card className={classes[cardAnimaton]}>
            <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                    <DvrIcon />
                    <h3>Skin Cancer</h3>
                </CardHeader>
                <p className={classes.divider}>Skin Cancer Test</p>
                <CardBody>
                    <ModelTest />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={send}>
                        Test
                    </Button>
                </CardFooter>
            </form>
        </Card>

    );
}

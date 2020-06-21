import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import ImageIcon from "@material-ui/icons/Image";
import LinkIcon from "@material-ui/icons/Link";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import NavPills from "components/NavPills/NavPills.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

const store = async function (e) {
    /*
    image = e.target.files[0];
    const uploadTask = storage.ref(`aptos/${image.name}`).put(image);
    uploadTask.on(
        "state_changed",
        snapshot => {
            console.log("uploading...");
            document.getElementById("uploading").style.display = "inline";
        },
        error => {
            console.log(error);
        },
        async () => {
            await storage
                .ref("aptos")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    imageURL = url;
                    console.log(imageURL);
                    document.getElementById("uploading").style.display = "none";
                    document.getElementById("resultButton").style.display = "inline";
                    document.getElementById("uploadedImageDivision").style.display =
                        "flex";
                    document.getElementById("uploadedImage").src = imageURL;
                });
        }
    );
    */
};

const getResult = function (e) {
    /*
    console.log("getting results");
    document.getElementById("uploading2").style.display = "flex";
    document.getElementById("resulttext").style.display = "flex";
    var request = require("request");
    const bodyF = `{\n"url": "${imageURL}"\n}`;

    var options = {
        method: "POST",
        url: "http://10.42.0.1:5000/aptos/",
        headers: {
            Host: "10.42.0.1:5000",
            Accept: "application/json",
            "Content-Type": "application/json,application/json"
        },
        body: bodyF
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        result = body.slice(14, body.length - 2);
        const final = Number(result);
        console.log(final);
        let bold = null;
        if (final <= 20 && final >= 0) {
            bold = document.getElementById("a");
        } else if (final <= 40 && final > 20) {
            bold = document.getElementById("b");
        } else if (final <= 60 && final > 40) {
            bold = document.getElementById("c");
        } else if (final <= 80 && final > 60) {
            bold = document.getElementById("d");
        } else if (final <= 100 && final > 80) {
            bold = document.getElementById("e");
        } else {
            alert("no output");
            return;
        }
        bold.style.fontWeight = 800;
        bold.style.color = "dodgerblue";
        document.getElementById("resulttext").style.display = "flex";
        document.getElementById("uploading2").style.display = "none";
        document.getElementById(
            "result"
        ).innerHTML = `The disease is ${result}% severe`;
        document.getElementById("heatimage").style.display = "flex";
        document.getElementById("heatimage").src = heatmap;
        document.getElementById("description").style.display = "flex";
    });
    */
};

export default function SectionTabs() {
    const classes = useStyles();
    let img = null;
    return (
        <div
            className={classes.section}
            style={{ paddingBottom: 0, marginBottom: 0 }}
        >
            <div className={classes.container}>
                <div id="nav-tabs">
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomTabs
                                headerColor="primary"
                                tabs={[
                                    {
                                        tabName: "Upload Image",
                                        tabIcon: ImageIcon,
                                        tabContent: (
                                            <div>
                                                <p className={classes.textCenter}>
                                                    <input
                                                        type="file"
                                                        alt="upload file image"
                                                        onChange={store}
                                                    />
                                                    <div id="uploading" style={{ display: "none" }}>
                                                        {" "}
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "center"
                                                            }}
                                                        >
                                                            <CircularProgress />{" "}
                                                        </div>
                                                    </div>
                                                    <Button
                                                        id="resultButton"
                                                        color="primary"
                                                        onClick={getResult}
                                                        style={{ display: "none" }}
                                                    >
                                                        Get Results
                          </Button>
                                                </p>
                                                <div
                                                    style={{ display: "none", justifyContent: "center" }}
                                                    id="uploadedImageDivision"
                                                >
                                                    <img
                                                        alt='image did not load'
                                                        src="#"
                                                        id="uploadedImage"
                                                        height="300px"
                                                        width="300px"
                                                    />
                                                </div>
                                            </div>
                                        )
                                    }
                                ]}
                            />
                        </GridItem>

                        <GridItem xs={12} sm={12} md={8} lg={6}>
                            <NavPills
                                color="primary"
                                tabs={[
                                    {
                                        tabButton: "Results",
                                        tabIcon: LinkIcon,
                                        tabContent: (
                                            <span>
                                                <div id="uploading2" style={{ display: "none" }}>
                                                    {" "}
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                        }}
                                                    >
                                                        <CircularProgress />{" "}
                                                    </div>
                                                </div>
                                                <br />
                                                <div
                                                    id="resulttext"
                                                    style={{ display: "none", justifyContent: "center" }}
                                                >
                                                    <div id="a" style={{ marginRight: 10, fontSize: 25 }}>
                                                        {" "}
                            Safe{" "}
                                                    </div>
                                                    <div id="b" style={{ marginRight: 10, fontSize: 25 }}>
                                                        {" "}
                            Mild{" "}
                                                    </div>
                                                    <div id="c" style={{ marginRight: 10, fontSize: 25 }}>
                                                        {" "}
                            Moderate{" "}
                                                    </div>
                                                    <div id="d" style={{ marginRight: 10, fontSize: 25 }}>
                                                        {" "}
                            Severe{" "}
                                                    </div>
                                                    <div id="e" style={{ marginRight: 10, fontSize: 25 }}>
                                                        {" "}
                            Poliferative{" "}
                                                    </div>
                                                </div>
                                                <p>
                                                    <h2>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "center"
                                                            }}
                                                            id="result"
                                                        >
                                                            {" "}
                                                        </div>
                                                    </h2>
                                                </p>
                                            </span>
                                        )
                                    },
                                    {
                                        tabButton: "Heat-Map",
                                        tabIcon: BrokenImageIcon,
                                        tabContent: (
                                            <span>
                                                <p>
                                                    <img
                                                        alt='image did not load'
                                                        src="#"
                                                        id="heatimage"
                                                        style={{ display: "none" }}
                                                    />
                                                </p>
                                            </span>
                                        )
                                    }
                                ]}
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}

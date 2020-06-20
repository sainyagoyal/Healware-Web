import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


import TabSection from './TabSection.js'
import './styles.scss'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} style={{ paddingTop: 50 }}>
            <div className="tabBar">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Models" {...a11yProps(0)} />
                    <Tab label="Chat with us" {...a11yProps(1)} />
                </Tabs>
            </div>
            <TabPanel value={value} index={0}>
                <TabSection />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {/* CHAT BOX */}
                <div style={{"margin":"10%","text-align":"center"}}>
                <Link to={`/join`}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                >
                Chat
                </Button>
                </Link>
                </div>
               
            </TabPanel>
        </div>
    );
}
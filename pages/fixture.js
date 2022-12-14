import React, { useState } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import {
  Box,
  Card,
  Container,
  Grid,
  Tab,
  Tabs,
  Toolbar
} from "@material-ui/core";
import Brackets from "../pages-sections/Fixture-Sections/Brackets";
import Positions from "../pages-sections/Fixture-Sections/Positions";
import Groups from "../components/Groups/Groups";

const useStyles = makeStyles({...styles, 
  tabs: {
  marginTop: '24px',

  '& .MuiTabs-root': {
    position: 'sticky',
    top: "72px",
    background: "#e5e5e5",
    zIndex: 2
  }
},
  main: {
    height: '100vh'
  }
});

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
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function Fixture({ ...props }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header
        brand="PRODEX"
        rightLinks={<HeaderLinks />}
        fixed
        color="secondary"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...props}
      />
      <Box component="main" className={classes.main}>
        <Toolbar />
        <Container className={classes.tabs}>
          <Grid container>
            <Grid item xs={12}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Grupos" {...a11yProps(0)} />
                <Tab label="Posiciones" {...a11yProps(1)} />
                <Tab label="Brackets" {...a11yProps(2)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Groups />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Positions />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Brackets />
              </TabPanel>
            </Grid>
          </Grid>
        </Container>
        <Toolbar />
        <Footer />
      </Box>
    </>
  );
}

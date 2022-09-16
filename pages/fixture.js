import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import { Box, Card, Tab, Tabs, Typography } from "@material-ui/core";
import Brackets from "../pages-sections/Fixture-Sections/Brackets";

const useStyles = makeStyles(styles);

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
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Fixture() {
  const classes = useStyles();
  const [value, setValue] = useState(0)

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header
        brand="Fixture"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Parallax image="/img/nextjs_header.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <Card>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Grupos" {...a11yProps(0)} />
                <Tab label="Posiciones" {...a11yProps(1)} />
                <Tab label="Brackets" {...a11yProps(2)}/>
              </Tabs>
              <TabPanel value={value} index={0}>
                Grupos
              </TabPanel>
              <TabPanel value={value} index={1}>
                Posiciones
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Brackets />
              </TabPanel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      
      <Footer />
    </div>
  );
}

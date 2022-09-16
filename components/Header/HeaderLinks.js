/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps } from "@material-ui/icons";

// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import { useWeb3 } from "../../contexts/Web3Context";
import { StatusConnection } from "../../utils/constants";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const { connect, disconnect, statusConnection } = useWeb3();


  const connectWallet = async () => {
    if (statusConnection === StatusConnection.Connected) {
      await disconnect()
      return
    }

    await connect()
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          variant="outlined"
          round
          color="primary"
          onClick={connectWallet}
        >
          {statusConnection === StatusConnection.Connected ? 'Desconectar wallet' : "Conectar wallet"}
        </Button>
      </ListItem>
    </List>
  );
}

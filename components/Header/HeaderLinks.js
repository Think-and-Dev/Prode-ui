/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import { useWeb3 } from "../../contexts/Web3Context";
import { StatusConnection } from "../../utils/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAddressFormatted } from "../../utils/commons";
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const { connect, disconnect, statusConnection, addressConnected } = useWeb3();
  const router = useRouter();

  const connectWallet = async () => {
    if (statusConnection === StatusConnection.Connected) {
      await disconnect();
      return;
    }

    await connect();
  };

  <Link href="#rules">
  <Button
    color="transparent"
    target="_blank"
    className={classes.navLink}
  >
    Reglas
  </Button>
</Link>

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="#ong">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Asociación Piel
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link href="#rules">
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Reglas
        </Button>
      </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          Logros
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={() => router.push("myPredictions")}
        >
          Predicciones
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="fixture">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Fixture
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Chip className={classes.chip} label="Metis Stardust" variant="outlined" />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          variant="outlined"
          round
          color="github"
          onClick={connectWallet}
        >
          {statusConnection === StatusConnection.Connected
            ? <>
            <AccountBalanceWallet /> {" "}
            {getAddressFormatted(addressConnected)}
            </>
            : "Conectar wallet"}
        </Button>
      </ListItem>
    </List>
  );
}

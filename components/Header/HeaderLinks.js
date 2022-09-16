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

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const { connect, disconnect, statusConnection } = useWeb3();

  const connectWallet = async () => {
    if (statusConnection === StatusConnection.Connected) {
      await disconnect();
      return;
    }

    await connect();
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          Achievments
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          Mis predicciones
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          Fixture
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          Asociación Piel
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          variant="outlined"
          round
          color="primary"
          onClick={connectWallet}
        >
          {statusConnection === StatusConnection.Connected
            ? "Desconectar wallet"
            : "Conectar wallet"}
        </Button>
      </ListItem>
    </List>
  );
}
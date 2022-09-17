import { Container, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import MyPredictionsContent from "../components/MyPredictions/MyPredictionsContent";
import { useWeb3 } from "../contexts/Web3Context";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";

const useStyles = makeStyles({
  rootGrid: {
    marginTop: "3rem"
  }
});

const MyPredictions = ({ ...props }) => {
  const classes = useStyles();

  const [ngoDonationPercentage, setNGODonationPercentage] = useState();
  const [ngoCurrentPoolPrize, setNGOCurrentPoolPrize] = useState();
  const [minWinnerPoints, setMinWinnerPoints] = useState();

  const {
    getNGODonationPercentage,
    getNGOCurrentPoolPrize,
    getMinWinnerPoints
  } = useWeb3();

  useEffect(() => {
    (async () => {
      const [_ngoDonationPercentage, _ngoCurrentPoolPrize, _minWinnerPoints] =
        await Promise.all([
          getNGODonationPercentage(),
          getNGOCurrentPoolPrize(),
          getMinWinnerPoints()
        ]);

      setNGODonationPercentage(_ngoDonationPercentage?.toString() || 0);
      setNGOCurrentPoolPrize(_ngoCurrentPoolPrize?.toString() || 0);
      setMinWinnerPoints(_minWinnerPoints?.toString() || 0);
    })();
  }, [getNGODonationPercentage, getNGOCurrentPoolPrize, getMinWinnerPoints]);

  return (
    <section>
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
      <Toolbar />
      <Container className={classes.rootGrid}>
        <Typography>
          Porcentage de donacion a la ONG: {ngoDonationPercentage}%
        </Typography>
        <Typography>Precio actual del pozo: {ngoCurrentPoolPrize}</Typography>
        <Typography>Minimo de puntos para ganar: {minWinnerPoints}</Typography>
        <MyPredictionsContent />
      </Container>
    </section>
  );
};

export default MyPredictions;

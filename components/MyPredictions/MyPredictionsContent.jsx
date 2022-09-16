import {
  Card,
  Container,
  Grid,
  Typography,
  Stack,
  makeStyles
} from "@material-ui/core";
import moment from "moment";
import { useEffect, useState } from "react";
import { getResultText } from "../../utils/commons";
import WinnerOrLoser from "../WinnerOrLoser";
import predictionMock from "./predictionsMock.json";

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    marginTop: "5rem"
  },
  predictionCard: {
    padding: "0.8rem 1rem"
  }
}));

const MyPredictionsContent = () => {
  const [predictions, setPredictions] = useState([]);
  const classes = useStyles();
  let isMounted = false;

  const getUserPredictions = async () => {
    return predictionMock;
  };

  useEffect(() => {
    isMounted = true;
    (async () => {
      const _predictions = await getUserPredictions();
      if (isMounted) setPredictions(_predictions);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2} className={classes.rootGrid}>
        {predictions.map((prediction) => (
          <Grid item xs={12} md={6}>
            <Card className={classes.predictionCard}>
              <Typography variant="h6">{prediction.title}</Typography>
              <Typography variant="subtitle1">
                {moment(prediction.date).format("LLL")}
              </Typography>
              {prediction.teams.map((team, i) => (
                <Grid container>
                  <Grid item xs={8}>
                    <Typography variant="h5">
                      {team.flag} {team.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <WinnerOrLoser itemIndex={i} result={prediction.prediction} />
                  </Grid>
                </Grid>
              ))}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyPredictionsContent;

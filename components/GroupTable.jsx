import {
  Card,
  Container,
  Grid,
  Typography,
  makeStyles,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import moment from "moment";
import { useEffect, useState } from "react";
import { useWeb3 } from "../contexts/Web3Context";
import WinnerOrLoser from "./WinnerOrLoser";

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    marginTop: "5rem"
  },
  predictionCard: {
    padding: "0.8rem 1rem"
  }
}));

const GroupTable = ({ isPrediction, groups }) => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState(groups.map(() => undefined));

  const { placeBets, startEvent } = useWeb3();

  const handleChange = (e, index) => {
    setFormValues((_values) => {
      _values[index] = e.target.value;
      return [..._values];
    });
  };

  const generateBets = async () => {
    const value = formValues[0];

    // try {
    //   const res = await placeBets([1], [value]);
    //   console.log("PLACING BETS: ", res);
    // } catch (err) {
    //   console.error(err);
    // }

    try {
      await startEvent();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Grid container spacing={2} className={classes.rootGrid}>
        {groups.map((group, index) => (
          <Grid item xs={12} md={6}>
            <Card className={classes.predictionCard}>
              <Typography variant="subtitle1">{group.title}</Typography>
              <Typography variant="subtitle2">
                {moment(group.date).format("LLL")}
              </Typography>
              <Grid container>
                <Grid item xs={8}>
                  <Typography>
                    {group.teams[0].flag} {group.teams[0].name}
                  </Typography>
                  <Typography>
                    {group.teams[1].flag} {group.teams[1].name}
                  </Typography>
                </Grid>
                <Grid iten xs={4}>
                  <WinnerOrLoser itemIndex={0} result={formValues[index]} />
                  <WinnerOrLoser itemIndex={1} result={formValues[index]} />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Prediccion
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formValues[index]}
                      label="Selecciona la prediccion"
                      onChange={(e) => handleChange(e, index)}
                    >
                      <MenuItem value={0}>Gana {group.teams[0].name}</MenuItem>
                      <MenuItem value={1}>Gana {group.teams[1].name}</MenuItem>
                      <MenuItem value={2}>Empatan</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
        <Grid container justify="flex-end">
          <Button
            variant="contained"
            color="primary"
            disabled={isNaN(Number(formValues[0]))}
            onClick={generateBets}
          >
            Generar apuesta
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GroupTable;

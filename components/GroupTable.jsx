import {
  Card,
  Container,
  Grid,
  Typography,
  makeStyles
} from "@material-ui/core";
import moment from "moment";
import WinnerOrLoser from "./WinnerOrLoser"

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

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2} className={classes.rootGrid}>
        {groups.map((group) => (
          <Grid item xs={12} md={6}>
            <Card className={classes.groupCard}>
              <Typography variant="h6">{group.title}</Typography>
              <Typography variant="subtitle1">
                {moment(group.date).format("LLL")}
              </Typography>
              {group.teams.map((team, i) => (
                <Grid container>
                  <Grid item xs={isPrediction ? 8 : 12}>
                    <Typography variant="h5">
                      {team.flag} {team.name}
                    </Typography>
                  </Grid>
                  {isPrediction && (
                    <Grid item xs={4}>
                      <WinnerOrLoser itemIndex={i} result={group.prediction} />
                    </Grid>
                  )}
                </Grid>
              ))}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GroupTable;
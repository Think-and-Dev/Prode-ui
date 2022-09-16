import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import positionsMock from "./positions.mock.json";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    maxWidth: "250px"
  }
}));

export default function Positions() {
  const [positions, setPositions] = useState([]);
  const classes = useStyles();

  const getPositions = async () => {
    return positionsMock;
  };

  useEffect(() => {
    (async () => {
      const _positions = await getPositions();
      setPositions(_positions);
    })();
  }, []);

  const sortTeams = (teams) => {
    teams.sort((a, b) => {
      if (a.points > b.points) return -1
      if (a.points < b.points) return 1

      return 0
    })

    return teams
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2} justify="center">
        {positions.map((group, index) => (
          <Grid item xs={12} md={7} key={index}>
            <Typography variant="h6">{group.title}</Typography>

            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Team</TableCell>
                    <TableCell align="right">Pts</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortTeams(group.teams).map((team) => (
                    <TableRow
                      key={team.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 }
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {team.flag} {team.name}
                      </TableCell>
                      <TableCell align="right">{team.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

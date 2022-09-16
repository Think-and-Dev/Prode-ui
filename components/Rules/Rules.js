import { Box, Typography } from "@material-ui/core";

import React from "react";

export const Rules = () => {
  return (
    <Box id="rules">
      <Typography variant="h3">Reglas</Typography>
      <Typography variant="body1">
        PRODEX es un prode mundialista descentralizado que se juega en la red
        Binance. Cada usuario puede crear su propio prode y competir con otros
        usuarios. Un tercio del premio se reparte entre los usuarios que
        acierten el resultado de los partidos, otro tercio se reparte entre los
        usuarios que acierten el ganador del partido y el último tercio se
        reparte entre los usuarios que acierten el ganador del mundial. El
        último tercio del premio se va a reparte
      </Typography>
    </Box>
  );
};

export default Rules;

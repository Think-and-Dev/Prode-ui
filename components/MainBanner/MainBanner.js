import { Box, Typography } from "@material-ui/core";
import React from "react";

export const MainBanner = () => {
  return (
    <Box
      style={{
        width: "70%",
        height: 500,
        display: "grid",
        alignContent: "center"
      }}
    >
      <Typography variant="h1">PRODEX</Typography>
      <Typography variant="h5">
        Prodex es una App para jugar prode de forma descentralizada, al mismo
        tiempo que permite aportar por una causa benéfica.
      </Typography>
    </Box>
  );
};

export default MainBanner;

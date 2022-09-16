import { Box, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";

export const ONG = () => {
  return (
    <Box id="ong">
      <Typography variant="h3">Asociación piel</Typography>
      <Image src="/img/asoc-piel.png" width={100} height={100} />
      <Typography variant="body1">
        PIEL es una Asociación Civil sin fines de lucro, en la que un grupo de
        médicos especialistas en distintas áreas, brinda atención
        interdisciplinaria a niños que padecen malformaciones congénitas,
        tumores y/o secuelas graves de accidentes/quemaduras. La Institución
        cuenta con un programa de becas para familias de bajos recursos, ya que
        la meta fundamental de PIEL es que todos los niños del país puedan
        acceder a las cirugías y tratamientos que necesitan garantizando la
        reinserción social del paciente. Con más de 20 años de existencia,
        Asociación Piel lleva atendidos a más de 4.000 niños y realiza 200
        cirugías reconstructivas por año.{" "}
      </Typography>
    </Box>
  );
};

export default ONG;

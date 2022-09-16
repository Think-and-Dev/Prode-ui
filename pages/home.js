import { Box, Typography } from "@material-ui/core";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";

export const Home = (props) => {
  const { ...rest } = props;

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url(/img/qatar_wc_15.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right bottom"
      }}
    >
      <Header
        brand="PRODEX"
        rightLinks={<HeaderLinks />}
        fixed
        color="secondary"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr"
        }}
      >
        <Box style={{ padding: 50, paddingTop: 100 }}>
          <Typography variant="h1">PRODEX</Typography>
          <Typography variant="h5">
            PRODEX es un prode mundialista descentralizado que se juega en la
            red Binance. Cada usuario puede crear su propio prode y competir con
            otros usuarios. La mitad del premio se reparte entre los usuarios
            que acierten el resultado de los partidos, la otra mitad será donada
            a la ONG Asociación piel
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Home;

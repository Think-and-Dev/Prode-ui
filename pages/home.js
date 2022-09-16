import { Box, Typography } from "@material-ui/core";
import ONG from "../components/ONG/Ong";
import Rules from "../components/Rules/rules";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";

export const Home = (props) => {
  const { ...rest } = props;

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url(/img/qatar_wc_15-3.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "auto"
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
      <SectionContainer
        style={{
          paddingTop: 100
        }}
      >
        <Typography variant="h1">PRODEX</Typography>
        <Typography variant="h5">
          Prodex es una App para jugar prode de forma descentralizada, al mismo
          tiempo que permite aportar por una causa benéfica.
        </Typography>
        <Typography variant="h5">
          La App se diferencia del resto agregando Oráculos de Chainlink para
          validar los resultados, dándole una grado más de descentralización.
        </Typography>
        <Typography variant="h5">
          Nuestro foco es eliminar la fricción en Web3, a través de una UI
          intuitiva y fácil de usar. La transparencia es otro punto importante,
          por lo cual la address de la ONG siempre estará publicada y se podrá
          consultar.
        </Typography>
      </SectionContainer>
      <SectionContainer>
        <Rules />
      </SectionContainer>
      <SectionContainer>
        <ONG />
      </SectionContainer>
    </div>
  );
};

export default Home;

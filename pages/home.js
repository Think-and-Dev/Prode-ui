import { Box, Typography } from "@material-ui/core";
import Background from "../components/Background";
import MainBanner from "../components/MainBanner/MainBanner";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";

export const Home = (props) => {
  const { ...rest } = props;

  return (
    <div>
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
      <Background img="/img/qatar_wc_15-2.png">
        <SectionContainer>
          <MainBanner />
        </SectionContainer>
      </Background>
      <SectionContainer>
        <Box style={{ width: "70%" }}>
          <Typography variant="h2">
            VIVÍ EL MUNDIAL DE FÚTBOL 2022 CON PRODEX JUNTO A TUS AMIGOS
          </Typography>
        </Box>
        <Background img="/img/people.jpeg">
          <Box style={{ width: 600, height: 600 }}></Box>
        </Background>
      </SectionContainer>
      <Background color="white">
        <SectionContainer>
          <Box style={{ width: "70%" }}>
            <Typography variant="h2">
              CON PRODEX VAS A ESTAR APORTANDO POR UNA CAUSA BENÉFICA
            </Typography>
          </Box>
          <Background img="/img/asoc-piel-2.png">
            <Box style={{ width: 600, height: 600 }}></Box>
          </Background>
        </SectionContainer>
      </Background>
    </div>
  );
};

export default Home;

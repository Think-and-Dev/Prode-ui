import { Container } from "@material-ui/core";
import MyPredictionsContent from "../components/MyPredictions/MyPredictionsContent";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";

const MyPredictions = ({...props}) => {

  return (
    <section>
      <Header
        brand="PRODEX"
        rightLinks={<HeaderLinks />}
        fixed
        color="secondary"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...props}
      />
    <Container>
      <MyPredictionsContent />
    </Container>
    </section>
  );
}

export default MyPredictions;
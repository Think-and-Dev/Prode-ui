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
    </div>
  );
};

export default Home;

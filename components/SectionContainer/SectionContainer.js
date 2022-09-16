import { Container } from "@material-ui/core";

export const SectionContainer = ({ children, style }) => {
  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr))",
        alignItems: "center",
        padding: "90px 0px 100px 0px",
        ...style
      }}
    >
      {children}
    </Container>
  );
};

export default SectionContainer;

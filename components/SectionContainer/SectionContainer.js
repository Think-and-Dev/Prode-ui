import { Box } from "@material-ui/core";

export const SectionContainer = ({ children, style }) => {
  return (
    <Box
      style={{
        width: "40%",
        padding: "0px 0px 50px 50px",
        ...style
      }}
    >
      {children}
    </Box>
  );
};

export default SectionContainer;

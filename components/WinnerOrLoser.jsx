import { Typography } from "@material-ui/core";
import { getResultColor, getResultText } from "../utils/commons";

const WinnerOrLoser = ({itemIndex, result, variant = "h5"}) => {
  const resultText = getResultText(itemIndex, result)
  const resultColor = getResultColor(itemIndex, result)
  
  return (
    <Typography variant={variant} color={resultColor} >
      {resultText}
    </Typography>
  );
}

export default WinnerOrLoser;
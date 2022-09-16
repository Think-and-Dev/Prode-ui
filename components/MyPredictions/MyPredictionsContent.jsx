import { useEffect, useState } from "react";
import GroupTable from "../GroupTable";
import predictionMock from "./predictionsMock.json";

const MyPredictionsContent = () => {
  const [predictions, setPredictions] = useState([]);
  let isMounted = false;

  const getUserPredictions = async () => {
    return predictionMock;
  };

  useEffect(() => {
    isMounted = true;
    (async () => {
      const _predictions = await getUserPredictions();
      if (isMounted) setPredictions(_predictions);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <GroupTable groups={predictions} isPrediction />
  );
};

export default MyPredictionsContent;

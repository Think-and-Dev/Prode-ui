import { useEffect, useState } from "react";
import GroupTable from "../GroupTable";
import predictionMock from "./predictionsMock.json";

const MyPredictionsContent = () => {
  return <GroupTable groups={predictionMock} isPrediction />;
};

export default MyPredictionsContent;

import React from "react";
import { Progress } from "semantic-ui-react";

const ProgressBar = ({ step }) => (
  <Progress value={step} total="5" progress="ratio" />
);

export default ProgressBar;

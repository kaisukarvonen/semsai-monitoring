import React from "react";
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import { Pages } from "../store";

const WorkersAffected = () => {
  return (
    <>
      <ProgressBar />
      <p>Workers affected</p>
      <ActionButtons
        nextProps={{
          disabled: false
        }}
        backLink="/"
        nextLink="/location"
        previousPage={Pages.PROBLEM}
        nextPage={Pages.LOCATION}
      />
    </>
  );
};

export default WorkersAffected;

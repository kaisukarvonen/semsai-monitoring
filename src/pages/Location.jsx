import React from "react";
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import { Pages } from "../store";

const Location = () => {
  return (
    <>
      <ProgressBar />
      <p>Location</p>
      <ActionButtons
        previousProps={{ disabled: false }}
        nextProps={{
          disabled: false
        }}
        backLink="/workers-affected"
        nextLink="/more-info"
        previousPage={Pages.WORKERS_AFFECTED}
        nextPage={Pages.MORE_INFO}
      />
    </>
  );
};

export default Location;

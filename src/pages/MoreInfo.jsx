import React from "react";
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import { Pages } from "../store";

const MoreInfo = () => {
  return (
    <>
      <ProgressBar />
      <p>More Information</p>
      <ActionButtons
        previousProps={{ disabled: false }}
        nextProps={{
          disabled: false
        }}
        backLink="/location"
        nextLink="/confirmation"
        nextPage={Pages.CONFIRMATION_SCREEN}
        previousPage={Pages.FACTORY_LOCATION}
      />
    </>
  );
};

export default MoreInfo;

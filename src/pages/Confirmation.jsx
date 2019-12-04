import React from "react";
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import { Pages } from "../store";

const Confirmation = () => {
  return (
    <>
      <ProgressBar />
      <p>Confirmation</p>
      <ActionButtons
        previousProps={{ disabled: false }}
        nextProps={{
          disabled: false
        }}
        backLink="/more-info"
        nextLink="/"
        nextPage={Pages.MORE_INFO}
        previousPage={Pages.PROBLEM}
      />
    </>
  );
};

export default Confirmation;

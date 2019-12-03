import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import styled from "styled-components";
import ActionButtons from "../components/ActionButtons";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import { KeyboardVoice } from "@material-ui/icons";
import SecondaryButton from "../components/SecondaryButton";

const Location = () => {
  return (
    <>
      <p>Location</p>
      <ActionButtons
        previousProps={{ disabled: false }}
        nextProps={{
          disabled: false
        }}
        backLink="/workers-affected"
        nextLink="/"
      />
    </>
  );
};

export default Location;

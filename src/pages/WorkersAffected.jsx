import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import styled from "styled-components";
import ActionButtons from "../components/ActionButtons";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import { KeyboardVoice } from "@material-ui/icons";
import SecondaryButton from "../components/SecondaryButton";

const WorkersAffected = () => {
  return (
    <>
      <p>Workers affected</p>
      <ActionButtons
        previousProps={{ disabled: true }}
        nextProps={{
          disabled: problem.name === "Other" && !problem.info
        }}
        previosLink="/"
        nextLink="/location"
      />
    </>
  );
};

export default WorkersAffected;

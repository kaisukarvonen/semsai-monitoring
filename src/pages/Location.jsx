import React from "react";
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import {
  Box,
  InputAdornment,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

import { Pages, saveReport } from "../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Input from "../components/Input";

const Location = ({ report, saveReport }) => {
  const updateLocation = (key, val) => {
    saveReport({ location: { ...report.location, [key]: val } });
  };
  const updatedLocation = report.location || {};
  return (
    <>
      <ProgressBar />
      <Box px={"18px"} pt={"12px"}>
        <Input
          label="What is the name of the factory where you work?"
          value={updatedLocation.name}
          onChange={e => updateLocation("name", e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={updatedLocation.remember}
              onChange={e => updateLocation("remember", e.target.checked)}
              color="primary"
            />
          }
          label="Remember this next time"
        />
      </Box>
      <ActionButtons
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

export default connect(
  state => ({
    report: state.report
  }),
  dispatch =>
    bindActionCreators(
      {
        saveReport
      },
      dispatch
    )
)(Location);

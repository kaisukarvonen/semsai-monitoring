import React from "react";
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import { Pages, saveReport } from "../store";
import Slider from '@material-ui/core/Slider';
import { PersonOutlined, Router } from "@material-ui/icons";
import Input from "../components/Input";
import {
  Box,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const WorkersAffected = ({ report, saveReport }) => {
  const setAffectedValue = (key, val) => {
    saveReport({ affected: { ...report.affected, [key]: val } });
  };
  const affected = report.affected || {};

  return (
    <>
      <ProgressBar />
      <h2>Workers affected</h2>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <PersonOutlined />
        </Grid>
        <Grid item xs>
          <Slider
            disabled={affected.amountNotKnown}
            value={affected.amount || 1}
            onChange={(e, newVal) => setAffectedValue("amount", newVal)}
            aria-labelledby="continuous-slider"
          />
        </Grid>
          <Grid item>
          <Router />
          </Grid>
      </Grid>
      <FormControlLabel
        control={
          <Checkbox
            checked={affected.amountNotKnown || false}
            onChange={e => setAffectedValue("amountNotKnown", e.target.checked)}
            color="primary"
          />
        }
        label="I do not know"
      />
      <br />
      <Input
        label="Write more here (optional)?"
        value={affected.more || ""}
        onChange={e => setAffectedValue("more", e.target.value)}
      />
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
)(WorkersAffected);

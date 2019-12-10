import React from "react";
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import { Pages, saveReport } from "../store";
import Slider from "@material-ui/core/Slider";
import { PersonOutlined } from "@material-ui/icons";
import Input from "../components/Input";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Box
} from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Container } from "./Problem";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.palette.primary.main};
  margin-top: 14px;
`;

const WorkersAffected = ({ report, saveReport }) => {
  const setAffectedValue = (key, val) => {
    saveReport({ ...report, affected: { ...report.affected, [key]: val } });
  };
  const affected = report.affected || {};

  return (
    <Container>
      <Grid item>
        <ProgressBar />
        <Box px={"12px"}>
          <p>Approximately, how many have experienced this problem?</p>
          <Grid container spacing={2} alignItems="center">
            <Grid direction="column">
              <PersonOutlined color="primary" />
              <Typography variant="body2">One</Typography>
            </Grid>
            <Grid item xs>
              <Slider
                disabled={affected.amountNotKnown}
                value={affected.amount || 1}
                onChange={(e, newVal) => setAffectedValue("amount", newVal)}
                aria-labelledby="continuous-slider"
              />
            </Grid>
            <Grid direction="column">
              <StyledFontAwesomeIcon icon={faIndustry} />
              <Typography variant="body2">
                Whole
                <br />
                factory
              </Typography>
            </Grid>
          </Grid>
          <FormControlLabel
            control={
              <Checkbox
                checked={affected.amountNotKnown || false}
                onChange={e =>
                  setAffectedValue("amountNotKnown", e.target.checked)
                }
                color="primary"
              />
            }
            label="I do not know"
          />
          <Box pt={2}>
            <Input
              label="Write more here (optional)"
              multiline
              rows={2}
              value={affected.more || ""}
              onChange={e => setAffectedValue("more", e.target.value)}
            />
          </Box>
        </Box>
      </Grid>
      <ActionButtons
        previousProps={{}}
        nextProps={{
          disabled: false
        }}
        backLink="/"
        nextLink="/location"
        previousPage={Pages.PROBLEM}
        nextPage={Pages.LOCATION}
      />
    </Container>
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

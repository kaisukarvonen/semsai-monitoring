import React from "react";
import ProgressBar from "../components/ProgressBar";
import styled from "styled-components";
import ActionButtons from "../components/ActionButtons";
import SecondaryButton from "../components/SecondaryButton";
import Input from "../components/Input";
import { Pages, saveReport } from "../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Typography, Box } from "@material-ui/core";

const problems = [
  "Working overtime",
  "Too little salary",
  "Safety problems",
  "Child labor",
  "Other"
];

const Problems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

const ProblemItem = styled.div`
  margin: 0.4rem 0;
  width: 63%;
  button {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledTypography = styled(Typography)`
  font-weight: 200;
  line-height: 1.3;
  font-size: 14px;
`;

export const StyledButton = styled(SecondaryButton)`
  text-transform: none;
  font-weight: normal;
  font-size: 14px;
`;

const Problem = ({ saveReport, report }) => {
  const updateProblem = (key, val) => {
    saveReport({ ...report, problem: { ...report.problem, [key]: val } });
  };
  const updatedProblem = report.problem || {};
  return (
    <>
      <Container>
        <div>
          <ProgressBar />
          <Box px={"12px"}>
            <Box py={"3px"}>
              <Typography variant="body1">
                Select below what your problem is about.
              </Typography>
              <StyledTypography variant="subtitle1">
                Please, select only one. If you have many problems, you can make
                another report later.
              </StyledTypography>
            </Box>
            <Problems>
              {problems.map(v => (
                <ProblemItem key={v}>
                  <StyledButton
                    variant={
                      updatedProblem.name === v ? "contained" : "outlined"
                    }
                    color="primary"
                    size="small"
                    onClick={() => updateProblem("name", v)}
                  >
                    {v}
                  </StyledButton>
                </ProblemItem>
              ))}
            </Problems>
            {updatedProblem.name && (
              <Input
                label={
                  <>
                    <Typography variant="body1">
                      Write in more detail what has happened.
                    </Typography>
                    <StyledTypography variant="subtitle1">
                      You can also click the microphone to speak.
                    </StyledTypography>
                  </>
                }
                multiline
                value={updatedProblem.info}
                onChange={e => updateProblem("info", e.target.value)}
              />
            )}
          </Box>
        </div>
        <ActionButtons
          previousProps={{ disabled: true }}
          nextProps={{
            disabled:
              !updatedProblem.name ||
              (updatedProblem.name === "Other" && !updatedProblem.info)
          }}
          nextPage={Pages.WORKERS_AFFECTED}
          backLink="/"
          nextLink="/workers-affected"
        />
      </Container>
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
)(Problem);

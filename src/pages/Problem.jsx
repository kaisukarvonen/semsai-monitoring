import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import styled from "styled-components";
import ActionButtons from "../components/ActionButtons";
import SecondaryButton from "../components/SecondaryButton";
import Input from "../components/Input";
import { Pages } from "../store";
import { Typography, Box } from "@material-ui/core";

const problems = [
  "Child labor",
  "Overtime working",
  "Missing safety gear",
  "Issue with payment",
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
  width: 50%;
  button {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledTypography = styled(Typography)`
  font-weight: 200;
  line-height: 1.3;
`;

const Problem = () => {
  const [problem, setProblem] = useState({});

  const updateProblem = (key, val) => {
    setProblem({ ...problem, [key]: val });
  };
  return (
    <>
      <Container>
        <div>
          <ProgressBar />
          <Box px={"12px"}>
            <Box py={"3px"}>
              Select below what your problem is about.
              <StyledTypography variant="subtitle1">
                Please, select only one. If you have many problems, you can make
                another report later.
              </StyledTypography>
            </Box>
            <Problems>
              {problems.map(v => (
                <ProblemItem key={v}>
                  <SecondaryButton
                    variant={problem.name === v ? "contained" : "outlined"}
                    color="primary"
                    size="small"
                    onClick={() => updateProblem("name", v)}
                  >
                    {v}
                  </SecondaryButton>
                </ProblemItem>
              ))}
            </Problems>
            {problem.name && (
              <Input
                label={
                  <>
                    Write in more detail what has happened.
                    <StyledTypography variant="subtitle1">
                      You can also click the microphone to speak.
                    </StyledTypography>
                  </>
                }
                multiline
                value={problem.info}
                onChange={e => updateProblem("info", e.target.value)}
              />
            )}
          </Box>
        </div>
        <ActionButtons
          previousProps={{ disabled: true }}
          nextProps={{
            disabled:
              !problem.name || (problem.name === "Other" && !problem.info)
          }}
          nextPage={Pages.WORKERS_AFFECTED}
          backLink="/"
          nextLink="/workers-affected"
        />
      </Container>
    </>
  );
};

export default Problem;

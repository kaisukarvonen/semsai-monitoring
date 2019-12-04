import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import styled from "styled-components";
import ActionButtons from "../components/ActionButtons";
import SecondaryButton from "../components/SecondaryButton";
import Input from "../components/Input";
import { Pages } from "../store";

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
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </div>
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
              label="Please tell what has happened"
              multiline
              placeholder="text"
              value={problem.info}
              onChange={e => updateProblem("info", e.target.value)}
            />
          )}
        </div>
        <ActionButtons
          previousProps={{ disabled: true }}
          nextProps={{
            disabled: !problem.name || (problem.name === "Other" && !problem.info)
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

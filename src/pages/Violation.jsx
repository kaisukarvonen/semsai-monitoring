import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import styled from "styled-components";
import ActionButtons from "../components/ActionButtons";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import { KeyboardVoice } from "@material-ui/icons";
import SecondaryButton from "../components/SecondaryButton";

const violations = [
  "Child labor",
  "Overtime working",
  "Missing safety gear",
  "Issue with payment",
  "Other"
];

const Violations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

const ViolationItem = styled.div`
  margin: 0.4rem 0;
  width: 50%;
  button {
    width: 100%;
  }
`;

const Label = styled.span`
  font-size: 0.9rem;
  padding-left: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Violation = () => {
  const [violation, setViolation] = useState({});

  const updateViolation = (key, val) => {
    setViolation({ ...violation, [key]: val });
  };
  return (
    <>
      <Container>
        <div>
          <ProgressBar step="1" />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </div>
          <Violations>
            {violations.map(v => (
              <ViolationItem key={v}>
                <SecondaryButton
                  variant={violation.name === v ? "contained" : "outlined"}
                  color="primary"
                  size="small"
                  onClick={() => updateViolation("name", v)}
                >
                  {v}
                </SecondaryButton>
              </ViolationItem>
            ))}
          </Violations>
          {violation.name && (
            <>
              Please tell what has happened
              <TextField
                fullWidth
                id="filled-basic"
                label="What happened"
                variant="filled"
                multiline
                value={violation.info}
                onChange={e => updateViolation("info", e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <KeyboardVoice />
                    </InputAdornment>
                  )
                }}
              />
            </>
          )}
        </div>
        <ActionButtons
          previousProps={{ disabled: true }}
          nextProps={{
            disabled: violation.name === "Other" && !violation.info
          }}
        />
      </Container>
    </>
  );
};

export default Violation;

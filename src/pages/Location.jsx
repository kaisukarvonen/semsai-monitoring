import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import {
  Box,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Typography
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import styled from "styled-components";

import { Pages, saveReport } from "../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Input from "../components/Input";
import { Container } from "./Problem";

const StyledBox = styled(Box)`
  position: relative;
`;

const Dropdown = styled(List)`
  position: absolute;
  bottom: -45px;
  background-color: #efece6;
  width: inherit;
  z-index: 2;
  border: 1px solid #ccc;
  border-radius: 1px;
  cursor: pointer;
  width: calc(100% - 36px);
  li:first-of-type {
    border-bottom: 1px solid #ccc;
  }
`;

const StyledLabel = styled.span`
  font-size: 14px;
`;

const factoryOptions = ["Huawei North", "Huawei South"];

const Location = ({ report, saveReport }) => {
  const [showOptions, setShowOptions] = useState(false);
  const updateLocation = (key, val) => {
    saveReport({ ...report, location: { ...report.location, [key]: val } });
    setShowOptions(
      key === "name" &&
        val.toLowerCase().includes("hu") &&
        !factoryOptions.includes(val)
    );
  };
  const updatedLocation = report.location || {};
  return (
    <Container>
      <div>
        <ProgressBar />
        <StyledBox px={"18px"} pt={"12px"}>
          <Input
            label={
              <Typography variant="body1">
                What is the name of the factory where you work?
              </Typography>
            }
            value={updatedLocation.name}
            onChange={e => updateLocation("name", e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
          />
          {showOptions && (
            <Dropdown>
              {factoryOptions.map(factory => (
                <ListItem onClick={() => updateLocation("name", factory)}>
                  {factory}
                </ListItem>
              ))}
            </Dropdown>
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={updatedLocation.remember}
                onChange={e => updateLocation("remember", e.target.checked)}
                color="primary"
              />
            }
            label={<StyledLabel>Remember this next time</StyledLabel>}
          />
        </StyledBox>
      </div>
      <ActionButtons
        previousProps={{}}
        nextProps={{
          disabled: !updatedLocation.name || updatedLocation.name.length < 3
        }}
        backLink="/workers-affected"
        nextLink="/more-info"
        previousPage={Pages.WORKERS_AFFECTED}
        nextPage={Pages.MORE_INFO}
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
)(Location);

import React from "react";
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import { Container, StyledTypography } from "./Problem";
import { Pages, saveReport } from "../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Input from "../components/Input";
import { Box, Typography } from "@material-ui/core";
import SecondaryButton from "../components/SecondaryButton";
import { AddAPhotoOutlined } from "@material-ui/icons";

const MoreInfo = ({ report, saveReport }) => {
  const updateLocation = (key, val) => {
    saveReport({ ...report, moreInfo: { ...report.moreInfo, [key]: val } });
  };
  const moreInfo = report.moreInfo || {};
  return (
    <Container>
      <div>
        <ProgressBar />
        <Box px={"16px"} pt={"12px"}>
          <Input
            label={
              <Typography variant="body1">
                Is there still something you want to tell? (optional)
              </Typography>
            }
            value={moreInfo.name}
            multiline
            rows={4}
            onChange={e => updateLocation("name", e.target.value)}
            helperText="e.g. How long this has continued"
          />
          <Box pt={"20%"}>
            <Typography variant="body1">
              You can also add a picture, if it helps to understand your problem
              (optional)
            </Typography>
            <StyledTypography variant="subtitle1">
              Please respect privacy, and don’t share pictures of people’s faces
            </StyledTypography>
            <Box pt={"9px"} display="flex" justifyContent="center">
              <SecondaryButton startIcon={<AddAPhotoOutlined />}>
                Add a picture
              </SecondaryButton>
            </Box>
          </Box>
        </Box>
      </div>
      <ActionButtons
        previousProps={{ disabled: false }}
        nextProps={{
          disabled: false
        }}
        backLink="/location"
        nextLink="/confirmation"
        nextPage={Pages.CONFIRMATION_SCREEN}
        previousPage={Pages.FACTORY_LOCATION}
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
)(MoreInfo);

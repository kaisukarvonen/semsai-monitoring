import React from "react";
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Pages, saveReport, PageLinks } from "../store";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Slider,
  Box
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { CreateOutlined } from "@material-ui/icons";

import styled from "styled-components";

const StyledCard = styled(Card)`
  margin: 10px 0;
  .MuiCardContent-root {
    padding: 10px;
  }
`;

const Bold = styled.span`
  font-weight: 500;
`;

const Content = styled(Typography)`
  padding-top: 5px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CardContainer = ({ title, content, linkTo, history }) => {
  return (
    <StyledCard>
      <CardContent>
        <FlexContainer>
          <div>{title}</div>
          <CreateOutlined
            color="primary"
            onClick={() => history.push(linkTo)}
          />
        </FlexContainer>
        {content}
      </CardContent>
    </StyledCard>
  );
};

const Confirmation = ({ report, history }) => {
  return (
    <>
      <ProgressBar />
      <Typography variant="body1">
        Make sure that all the information is correct before sending your answer
      </Typography>
      <CardContainer
        title={
          <Typography variant="body1">
            <Bold>Problem: </Bold>
            {report.problem.name}
          </Typography>
        }
        content={<Content variant="body2">{report.problem.info}</Content>}
        history={history}
        linkTo={PageLinks.PROBLEM}
      />
      <CardContainer
        title={
          <FlexContainer>
            <Typography variant="body1">
              <Bold>Scale: </Bold>
              {report.amountNotKnown && <>I don't know</>}
            </Typography>
            <div>
              <Slider
                // disabled={true}
                value={report.affected.amount || 1}
                aria-labelledby="continuous-slider"
                min={1}
              />
            </div>
          </FlexContainer>
        }
        content={<Content variant="body2">{report.affected.more}</Content>}
        history={history}
        linkTo={PageLinks.WORKERS_AFFECTED}
      />
      <Card>
        <CardHeader
          action={
            <IconButton
              color="primary"
              aria-label="edit scale"
              href="workers-affected"
            >
              <CreateIcon />
            </IconButton>
          }
          title="Scale:"
        />
        <CardContent>
          <br />
          <Grid container spacing={2} alignItems="center">
            <Grid container spacing={2} alignItems="center" direction="row">
              <Grid item xs>
                <Slider
                  // disabled={true}
                  value={report.affected.amount || 1}
                  aria-labelledby="continuous-slider"
                  min={1}
                />
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Typography>{report.affected.more}</Typography>
        </CardContent>
      </Card>
      <CardContainer
        title={
          <Typography variant="body1">
            <Bold>Location: </Bold>
            {report.location.name}
          </Typography>
        }
        history={history}
        linkTo={PageLinks.LOCATION}
      />
      <CardContainer
        title={
          <Typography variant="body1">
            <Bold>More information</Bold>
          </Typography>
        }
        content={<Content variant="body2">{report.moreInfo.name}</Content>}
        history={history}
        linkTo={PageLinks.MORE_INFO}
      />
      <ActionButtons
        previousProps={{ disabled: false }}
        nextProps={{
          disabled: false,
          customText: "Send report"
        }}
        backLink="/more-info"
        nextLink="/thank-you"
        nextPage={Pages.THANK_YOU}
        previousPage={Pages.MORE_INFO}
      />
    </>
  );
};

export default withRouter(
  connect(
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
  )(Confirmation)
);

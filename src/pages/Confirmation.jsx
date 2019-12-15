import React from "react";
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Pages,
  saveReport,
  PageLinks,
  changePage,
  changeCameFromConfirmation
} from "../store";
import { Card, CardContent, Typography, Slider, Box } from "@material-ui/core";
import { CreateOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Container } from "./Problem";

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

const SliderContainer = styled.div`
  min-width: 189px;
  margin-left: 10px;
  .MuiSlider-root {
    padding: 11px;
    color: ${({ theme }) => theme.palette.text.main};
  }
  .MuiSlider-rail {
    opacity: 1;
  }
`;

const CardContainer = ({ title, content, changeRoute }) => {
  return (
    <StyledCard>
      <CardContent>
        <FlexContainer>
          <div>{title}</div>
          <CreateOutlined color="primary" onClick={changeRoute} />
        </FlexContainer>
        {content}
      </CardContent>
    </StyledCard>
  );
};

const Confirmation = ({
  report,
  history,
  changeCameFromConfirmation,
  changePage
}) => {
  const changeRoute = (linkTo, page) => {
    changeCameFromConfirmation(true);
    changePage(page);
    history.push(linkTo);
  };

  return (
    <Container>
      <div>
        <ProgressBar />
        <Box px={"12px"}>
          <Typography variant="body1">
            Make sure that all the information is correct before sending your
            answer
          </Typography>
        </Box>
        <CardContainer
          title={
            <Typography variant="body1">
              <Bold>Problem: </Bold>
              {report.problem.name}
            </Typography>
          }
          content={<Content variant="body2">{report.problem.info}</Content>}
          changeRoute={() => changeRoute(PageLinks.PROBLEM, Pages.PROBLEM)}
        />
        <CardContainer
          title={
            <FlexContainer>
              <Typography variant="body1">
                <Bold>Scale: </Bold>
                {report.affected.amountNotKnown && <>I don't know</>}
              </Typography>
              {!report.affected.amountNotKnown && (
                <SliderContainer>
                  <Slider
                    value={report.affected.amount || 1}
                    aria-labelledby="continuous-slider"
                    min={1}
                  />
                </SliderContainer>
              )}
            </FlexContainer>
          }
          content={<Content variant="body2">{report.affected.more}</Content>}
          changeRoute={() =>
            changeRoute(PageLinks.WORKERS_AFFECTED, Pages.WORKERS_AFFECTED)
          }
        />
        <CardContainer
          title={
            <Typography variant="body1">
              <Bold>Factory: </Bold>
              {report.location.name}
            </Typography>
          }
          changeRoute={() => changeRoute(PageLinks.LOCATION, Pages.LOCATION)}
        />
        <CardContainer
          title={
            <Typography variant="body1">
              <Bold>More information</Bold>
            </Typography>
          }
          content={<Content variant="body2">{report.moreInfo.name}</Content>}
          changeRoute={() => changeRoute(PageLinks.MORE_INFO, Pages.MORE_INFO)}
        />
      </div>
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
    </Container>
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
          saveReport,
          changeCameFromConfirmation,
          changePage
        },
        dispatch
      )
  )(Confirmation)
);

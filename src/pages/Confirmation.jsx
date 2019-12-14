import React from "react"
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { 
  Pages,
  saveReport
 } from "../store";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Slider
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { PersonOutlined } from "@material-ui/icons";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.palette.primary.main};
  font-size: 18px;
`;

const Confirmation = ({report}) => {
  return (
    <>
      <ProgressBar />
      <p>
        Make sure that all the information is correct before sending your answer
      </p>
      <Card>
        <CardHeader
          action={
            <IconButton color="primary" aria-label="edit problem" href="/">
              <CreateIcon />
              </IconButton>
            }
            title ={"Problem:" + (report.problem.name || "")}
          />
          <CardContent>
            <Typography >
              {report.problem.info}
            </Typography>
            </CardContent>
          </Card>
          <p></p>
          <Card>
            <CardHeader
            action={
              <IconButton color="primary" aria-label="edit scale" href="workers-affected">
              <CreateIcon />
              </IconButton>
            }
            title = "Scale:"
          />
          <CardContent>
          <br />
          <Grid container spacing={2} alignItems="center">
            <Grid container spacing={2} alignItems="center" direction="row">
              <Grid item>
                <PersonOutlined color="primary" />
              </Grid>
              <Grid item xs>
                <Slider
                  disabled = {true}
                  value={report.affected.amount || 1}
                  aria-labelledby="continuous-slider"
                  min={1}
                />
              </Grid>
              <Grid item>
                <StyledFontAwesomeIcon icon={faIndustry} />
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" direction="row">
              <Grid item>
                <Typography variant="body2">One</Typography>
              </Grid>
              <Grid item xs />
              <Grid item>
                <Typography variant="body2">Whole factory</Typography>
              </Grid>
            </Grid>
          </Grid>
          <br />
            <Typography >
              {report.affected.more}
            </Typography>
            </CardContent>
          </Card>
          <p></p>
          <Card>
            <CardHeader
            action={
              <IconButton color="primary" aria-label="edit scale" href="location">
              <CreateIcon />
              </IconButton>
            }
            title = {"Location:  " + (report.location.name || "")}
          />
          </Card>
          <p></p>
          <Card>
            <CardHeader
            action={
              <IconButton color="primary" aria-label="edit info" href="/more-info">
              <CreateIcon />
            </IconButton>
          }
          title={"More information"}
        />
        <CardContent>
          <Typography>
            {report.moreInfo.name || ""}
          </Typography>
        </CardContent>
      </Card>
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
)(Confirmation);
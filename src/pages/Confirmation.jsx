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
  IconButton
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

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
            title ="Problem:"
          />
          <CardContent>
            <Typography >
              {}
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
          </Card>
          <p></p>
          <Card>
            <CardHeader
            action={
              <IconButton color="primary" aria-label="edit scale" href="location">
              <CreateIcon />
              </IconButton>
            }
            title = {"Location:  "+ report.location.name}
          />
          <CardContent>
            <Typography >
              Text
            </Typography>
            </CardContent>
          </Card>
          <p></p>
          <Card>
            <CardHeader
            action={
              <IconButton color="primary" aria-label="edit info" href="/more-info">
              <CreateIcon />
            </IconButton>
          }
          title="More information:"
        />
        <CardContent>
          <Typography>Text</Typography>
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
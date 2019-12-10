import React from "react";
import ProgressBar from "../components/ProgressBar";
import ActionButtons from "../components/ActionButtons";
import { Pages } from "../store";
import {
  Card,
  Button,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
}from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

const Confirmation = () => {
  return (
    <>
      <ProgressBar />
      <p>Make sure that all the information is correct before sending your answer</p>
          <Card>
            <CardHeader
            action={
              <IconButton color="primary" aria-label="edit problem">
              <CreateIcon />
              </IconButton>
            }
            title ="Problem:"
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
              <IconButton color="primary" aria-label="edit scale">
              <CreateIcon />
              </IconButton>
            }
            title ="Scale:"
          />
          </Card>
          <p></p>
          <Card>
            <CardHeader
            action={
              <IconButton color="primary" aria-label="edit info">
              <CreateIcon />
              </IconButton>
            }
            title ="More information:"
          />
          <CardContent>
            <Typography >
              Text
            </Typography>
            </CardContent>
          </Card>
      <ActionButtons
        previousProps={{ disabled: false }}
        nextProps={{
          disabled: false
        }}
        backLink="/more-info"
        nextLink="/"
        sendReport={Pages.WORKERS_AFFECTED}
        previousPage={Pages.MORE_INFO}
      />
    </>
  );
};

export default Confirmation;

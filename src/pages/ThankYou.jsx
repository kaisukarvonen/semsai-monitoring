import React from "react";
import ActionButtons from "../components/ActionButtons";
import { Pages } from "../store";
import { Box, Card, Typography } from "@material-ui/core";

const ThankYou = () => {
  return (
    <Box pt={"18px"}>
      <Card>
        <Box p={"14px"}>
          <Box px={"12px"}>
            <Typography variant="h4">Thank you!</Typography>
            <Typography variant="body1">
              Your answer has been sent successfully.
              <p>We try to fix the problem as soon as possible.</p>
              If you have more problems to tell about, click the button “New
              report”. Otherwise, don’t hesitate to come back if you have new
              problems!
            </Typography>
          </Box>
          <ActionButtons
            previousProps={{ customText: "Back to home" }}
            nextProps={{
              disabled: false,
              customText: "New report"
            }}
            backLink="/"
            nextLink="/"
            nextPage={Pages.PROBLEM}
            previousPage={Pages.PROBLEM}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default ThankYou;

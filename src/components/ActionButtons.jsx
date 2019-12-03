import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import SecondaryButton from "./SecondaryButton";
import {
  Link,
} from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.4rem;
`;
const ActionButtons = ({ previousProps, nextProps, backLink, nextLink }) => (
  <ButtonContainer>
    <Link to={nextLink}>
      <SecondaryButton variant="outlined" color="primary" {...previousProps}>
        Back
      </SecondaryButton>
    </Link>
    <Link to={nextLink}>
      <Button variant="contained" color="primary" {...nextProps}>
        Next page
      </Button>
    </Link>
  </ButtonContainer>
);

export default ActionButtons;

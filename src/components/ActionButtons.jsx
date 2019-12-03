import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import SecondaryButton from "./SecondaryButton";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.4rem;
`;
const ActionButtons = ({ previousProps, nextProps }) => (
  <ButtonContainer>
    <SecondaryButton variant="outlined" color="primary" {...previousProps}>
      Back
    </SecondaryButton>
    <Button variant="contained" color="primary" {...nextProps}>
      Next page
    </Button>
  </ButtonContainer>
);

export default ActionButtons;

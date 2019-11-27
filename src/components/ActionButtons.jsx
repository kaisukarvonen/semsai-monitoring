import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.4rem;
`;

const ActionButtons = ({ previousProps, nextProps }) => (
  <ButtonContainer>
    <Button compact size="small" icon="arrow left" labelPosition="left" {...previousProps} content="Back" />
    <Button compact size="small" icon="arrow right" labelPosition="right" {...nextProps} content="Next" />
  </ButtonContainer>
);

export default ActionButtons;

import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  border: 1px solid rgba(34, 34, 34, 0.49);
`;

const SecondaryButton = ({ children, ...rest }) => (
  <StyledButton variant="outlined" color="primary" {...rest}>
    {children}
  </StyledButton>
);

export default SecondaryButton;

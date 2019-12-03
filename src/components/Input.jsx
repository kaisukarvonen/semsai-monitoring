import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { KeyboardVoiceOutlined } from "@material-ui/icons";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  .MuiFilledInput-multiline {
    padding: 12px;
  }
`;

const Input = ({ label, ...rest }) => {
  return (
    <>
      {label}
      <StyledTextField
        fullWidth
        id="filled-basic"
        variant="filled"
        {...rest}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <KeyboardVoiceOutlined />
            </InputAdornment>
          )
        }}
      />
    </>
  );
};

export default Input;

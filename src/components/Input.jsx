import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { KeyboardVoiceOutlined } from "@material-ui/icons";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  .MuiFilledInput-multiline {
    padding: 12px;
  }
  .MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel) {
    margin-top: 0;
  }
  .MuiFilledInput-input:not(textarea) {
    padding: 17px 3px;
  }
`;

const Input = ({ label, startAdornment, ...rest }) => {
  return (
    <>
      {label}
      <StyledTextField
        fullWidth
        id="filled-basic"
        variant="filled"
        rows={3}
        {...rest}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <KeyboardVoiceOutlined />
            </InputAdornment>
          ),
          startAdornment
        }}
      />
    </>
  );
};

export default Input;

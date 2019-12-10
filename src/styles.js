import { createGlobalStyle } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: { main: "#2104D6" },
    secondary: { main: "#FFCF54" },
    text: { main: "#222", secondary: "#555" },
    action: { active: "#fff" }
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(",")
  }
});

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: 0.875rem;
  }

  body {
    background-color: #FAFAF8;
    color: #303030;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box
  }
`;

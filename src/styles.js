import { createGlobalStyle } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: { main: "#2104D6" },
    secondary: { main: "#2104D6" },
    text: { main: "#222", secondary: "#fff" }
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

  #root {
    height: 100%;
  }
`;

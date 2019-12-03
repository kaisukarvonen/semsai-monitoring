import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Violation from "./pages/Violation";
import styled from "styled-components";
import { theme, GlobalStyle } from "./styles";
import {
  ThemeProvider as MaterialTheme,
  StylesProvider
} from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import { Typography } from "@material-ui/core";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.7rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 50px;
`;

const RouteContainer = styled.div`
  padding: 0.9rem;
  height: calc(100% - 50px);
`;

const AppContainer = styled.div`
  background-color: #f2f0ef;
  height: 100%;
  font-size: 15px;
`;

const App = () => {
  return (
    <StylesProvider injectFirst>
      <MaterialTheme theme={theme}>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <AppContainer>
              <Router>
                <Header>
                  <div>icon</div>
                  {/* <Icon name="bars" size="large" /> */}
                  <Typography variant="h6" color="textSecondary">
                    Semsai Monitoring
                  </Typography>
                  <div>icon</div>
                  {/* <Icon circular bordered name="help" /> */}
                </Header>
                <RouteContainer>
                  <Switch>
                    <Route exact path="/">
                      <Violation />
                    </Route>
                  </Switch>
                </RouteContainer>
              </Router>
            </AppContainer>
          </>
        </ThemeProvider>
      </MaterialTheme>
    </StylesProvider>
  );
};

export default App;

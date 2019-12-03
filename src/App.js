import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WorkersAffected from "./pages/WorkersAffected";
import Problem from "./pages/Problem";
import Location from "./pages/Location";
import styled from "styled-components";
import { theme, GlobalStyle } from "./styles";
import {
  ThemeProvider as MaterialTheme,
  StylesProvider
} from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import { Typography } from "@material-ui/core";
import semsaiApp from './store';
import { Provider as StoreProvider } from 'react-redux'
import { createStore } from 'redux'
import { Menu, Close, Help } from "@material-ui/icons";

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
  background: linear-gradient(158.35deg, #ffffff 2.73%, #f3eee4 98.97%), #fafaf8;
  height: 100%;
  font-size: 15px;
`;

const StyledClose = styled(Close)`
  margin-left: 6px;
`;

export const pages = [
  "Problem",
  "Scale",
  "Factory",
  "More info",
  "Confirmation"42
];

const App = () => {
  return (
    <StylesProvider injectFirst>
      <MaterialTheme theme={theme}>
        <ThemeProvider theme={theme}>
          <StoreProvider store={createStore(semsaiApp)}>
            <>
              <GlobalStyle />
              <AppContainer>
                <Router>
                  <Header>
                    <Menu color="action" />
                    <Typography variant="h6" color="textSecondary">
                      Semsai Monitoring
                    </Typography>
                    <div>
                      <Help color="secondary" />
                      <StyledClose color="secondary" />
                    </div>
                  </Header>
                  <RouteContainer>
                    <Switch>
                      <Route exact path="/">
                        <Problem />
                      </Route>
                      <Route exact path="/workers-affected">
                        <WorkersAffected />
                      </Route>
                      <Route exact path="/location">
                        <Location />
                      </Route>
                    </Switch>
                  </RouteContainer>
                </Router>
              </AppContainer>
            </>
          </StoreProvider>
        </ThemeProvider>
      </MaterialTheme>
    </StylesProvider>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WorkersAffected from "./pages/WorkersAffected";
import Problem from "./pages/Problem";
import Location from "./pages/Location";
import MoreInfo from "./pages/MoreInfo";
import Confirmation from "./pages/Confirmation";
import styled from "styled-components";
import { theme, GlobalStyle } from "./styles";
import {
  ThemeProvider as MaterialTheme,
  StylesProvider
} from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import { Typography } from "@material-ui/core";
import semsaiApp, { changePage } from "./store";
import { Provider as StoreProvider, connect } from "react-redux";
import { createStore, bindActionCreators } from "redux";
import { Menu, Close, Help } from "@material-ui/icons";

const StyledHeader = styled.div`
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
                  <Header />
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
                      <Route exact path="/more-info">
                        <MoreInfo />
                      </Route>
                      <Route exact path="/confirmation">
                        <Confirmation />
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

const HeaderComponent = ({ page }) => (
  <StyledHeader>
    <Menu color="action" />
    <Typography variant="h6" color="textSecondary">
      {page}
    </Typography>
    <div>
      <Help color="secondary" />
      <StyledClose color="secondary" />
    </div>
  </StyledHeader>
);

const Header = connect(
  state => ({
    page: state.page
  }),
  dispatch =>
    bindActionCreators(
      {
        changePage
      },
      dispatch
    )
)(HeaderComponent);

export default App;

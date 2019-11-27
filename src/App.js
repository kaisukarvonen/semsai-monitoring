import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header as SemanticHeader, Icon } from "semantic-ui-react";
import Violation from "./pages/Violation";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.7rem;
  background-color: #abcdef;
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
    <AppContainer>
      <Router>
        <Header>
          <Icon circular bordered name="help" />
          <SemanticHeader as="h3">Semsai Monitoring</SemanticHeader>
          <Icon name="bars" size="large" />
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
  );
};

export default App;

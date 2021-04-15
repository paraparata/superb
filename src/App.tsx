import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, NavBar } from "./components/base";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Router>
        <Header />
        <MainLayout style={{ flex: 1 }}>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;

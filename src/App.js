import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faInfo,
  faSearch,
  faHamburger,
  faCoffee,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";

import LeftNav from "./pages/LeftNav";
import MainNav from "./pages/MainNav";
import RightNav from "./pages/RightNav";

import Home from "./pages/Home";
import SuperbLayout from "./components/SuperbLayout";

library.add(
  fab,
  faInfo,
  faSearch,
  faHamburger,
  faCoffee,
  faHeart,
  faHeartBroken
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/superb" exact>
          <SuperbLayout
            leftNav={<LeftNav />}
            mainNav={<MainNav />}
            rightNav={<RightNav />}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

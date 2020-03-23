import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

import Home from "./pages/Home";
import About from "./pages/About";

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} initial title="home" />
      <Scene key="about" component={About} title="about" />
    </Stack>
  </Router>
);

export default Routes;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  Rooms,
  Services,
  Contact,
  Gallery,
  News
} from "./component";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

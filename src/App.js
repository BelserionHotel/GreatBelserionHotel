import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Header,
  Home,
  About,
  Rooms,
  Services,
  Contact,
  Gallery,
  Signin,
  Signup
} from "./component";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact="true">
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

        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

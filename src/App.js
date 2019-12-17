import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  Services,
  Contact,
  Gallery,
  Signin,
  Signup,
  Rooms,
  Booking,
  Checkout,
  OrderDetail
} from "./Pages";

function App() {
  return (
    <Fragment>
      <Router>
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
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orderdetail">
            <OrderDetail />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

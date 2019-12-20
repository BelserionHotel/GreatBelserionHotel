import React, { Fragment } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import  NavigationBar  from "./NavigationBar";
import  NavigationBarMember  from "./NavigationBarMember";

export default function HeaderHome(props) {
  console.log(props);

  return (
    <Fragment>
       {JSON.parse(localStorage.getItem("token")) === null ? (
                <NavigationBar />
            ) : (
                <NavigationBarMember />
            )}
      
      <Jumbotron fluid className="jumbotron" style={{height:'400px'}}>
        <Container>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1
            className="text-center jtext"
            style={{
              color: "white",
              fontSize: "100px",
              fontFamily: "Playfair Display",
              lineHeight: "90px",
              verticalAlign: "baseline",
              letterSpacing: "5px",
              wordSpacing: "0",
              fontWeight: "700"
            }}
          >
            {props.jumbotronTitle}
          </h1>

          <p
            className="text-center"
            style={{
              color: "white",
              fontSize: "50px",
              fontFamily: "Playfair Display serif"
            }}
          >
            {props.jumbotronSubtitle}
          </p>
        </Container>
      </Jumbotron>
      {props.children}
    </Fragment>
  );
}

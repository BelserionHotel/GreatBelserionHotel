import React from "react";
import "../main.css";
import { Link, withRouter } from "react-router-dom";

function Signin() {
  return (
    <div className="bungkus">
      <div id="wrapper">
        <div className="form-container">
          <span className="form-heading">
            <span className="signin">SignUp</span>|{" "}
            <Link to="/signup" style={{ color: "white" }}>
              SignUp
            </Link>
          </span>
          <form action="">
            <br />
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email ..." required />
              <span className="bar"></span>
            </div>
            <br />
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password ..." required />
              <span className="bar"></span>
            </div>

            <div className="input-group">
              <button>Login</button>
            </div>
            <div className="switch-login">
              <a href="/">
                Already have an account ? <span>SignUp</span>
              </a>
              <br />
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Signin);

import React from "react";
import "../main.css";
import { Link, withRouter } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div id="wrapper">
        <div className="form-container">
          <span className="form-heading">
            <Link to="/signin" style={{ color: "white" }}>
              Signin
            </Link>{" "}
            | <span className="signin">SignUp</span>
          </span>
          <form action="">
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Username ..." required />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email ..." required />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password ..." required />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password ..."
                required
              />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <button>SignUp</button>
            </div>
            <div className="switch-login">
              <a href="#">
                Already have an account ? <span>Login</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Signup);

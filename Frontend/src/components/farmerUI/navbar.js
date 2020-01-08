import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import cookie from "react-cookies";
import { Redirect } from "react-router";

import logoSAC from "../images/logoSAC.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => {
    cookie.remove("cookie", { path: "/" });
  };

  render() {
    let navLogin = null;
    //if (cookie.load("cookie")) {
    //  console.log("Able to read cookie");
    navLogin = (
      <nav
        className="navbar navbar-default"
        style={{
          height: 60,
          backgroundImage:
            "-webkit-linear-gradient(bottom, #FFF8DC 0%,#67ac00 ,#67ac00 )",
          marginBottom: "0px",
          border: "1px solid #000",
          borderRadius: 5
        }}
      >
        <div class="container-fluid">
          <div class="navbar-header">
            <a
              class="navbar-brand"
              href="/"
              style={{
                fontFamily: "Apple Chancery",
                fontSize: 45,
                color: "black"
              }}
            >
              Smart Agriculture
            </a>
          </div>
          <ul class="nav navbar-nav">
            <li>
              <a
                href="#"
                style={{
                  color: "black"
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "black"
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  style={{
                    marginTop: 8,
                    marginRight: 8,
                    borderRadius: 10
                  }}
                />
              </div>
            </li>
            <li>
              <a href="/registerAll" style={{ color: "black" }}>
                <span class="glyphicon glyphicon-user" /> Sign Up
              </a>
            </li>
            <li>
              <a
                href="/login"
                style={{
                  color: "black"
                }}
              >
                <span class="glyphicon glyphicon-log-in" /> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );

    return <div>{navLogin}</div>;
  }
}
export default Navbar;

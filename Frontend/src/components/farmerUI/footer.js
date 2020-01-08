import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import cookie from "react-cookies";
import { Redirect } from "react-router";

import logoSAC from "../images/logoSAC.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav
          class="navbar fixed-bottom navbar-dark"
          style={{
            height: 160,
            backgroundImage:
              "-webkit-linear-gradient(bottom, #15A819 0%,#266E28, #266E28)",
            marginBottom: "0px",
            border: "3px solid #000",
            borderRadius: 5
          }}
        >
          <div
            class="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div class="col-lg-2" style={{ textAlign: "center" }}>
              <h3>Follow us on:</h3>
              <br />
            </div>
            <div class="col-lg-2" style={{ textAlign: "center" }}>
              <h3>Follow us on:</h3>
              <br />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Footer;

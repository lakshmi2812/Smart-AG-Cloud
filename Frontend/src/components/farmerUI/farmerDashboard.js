import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import bkg from "../images/farmerDash.jpeg";
import logoSAC from "../images/logoSAC.png";
import MapFarmer from "./mapFarmer";
//import SideNavbarFarmer from "./sideNavbarFarmer";

class FarmerDashboard extends Component {
  constructor(props) {
    super(props);
    /* this.state = {
                    redirectFlag: false,
                }*/
  }
  componentDidMount() {
    console.log("Here is farmer");
  }

  render() {
    /* let redirectVar = null;
                if (cookie.load("cookie")) {
                    redirectVar = <Redirect to="/home" />;
                 } */
    return (
      <div
        style={{
          backgroundImage:
            "-webkit-linear-gradient(top, EEEBEB 0%,EEEBEB ,#edffd3 )",
          backgroundPosition: "center",
          backgroundRepeat: "no - repeat",
          backgroundSize: "cover",
          minHeight: "100%",
          overflow: "hidden"
        }}
      >
        <div class="row-fluid">
          <div
            class="col-md-2"
            style={{
              textAlign: "center",
              paddingRight: 0
            }}
          >
            <div
              class="d-flex flex-column"
              style={{
                backgroundColor: "#FF8C00",
                borderRadius: 10,
                border: "3px solid black",
                display: "table",
                height: 1200
              }}
            >
              <div class="p-2">
                <img
                  src={logoSAC}
                  href="/"
                  alt="Card image"
                  style={{
                    backgroundColor: "#fffff",
                    height: 120,
                    marginTop: 30
                  }}
                />
              </div>
              <div class="p-2" style={{ marginTop: 30, fontSize: "2em" }}>
                <a href="/">Home</a>
              </div>
              <div class="p-2" style={{ marginTop: 30, fontSize: "2em" }}>
                <a href="/listOfSensors">List Of Sensors</a>
              </div>
              <div class="p-2" style={{ marginTop: 30, fontSize: "2em" }}>
                <a href="/addASensorFinal">Add a New Sensor</a>
              </div>
              <div class="p-2" style={{ marginTop: 30, fontSize: "2em" }}>
                <a href="/removeASensor">Remove a New Sensor</a>
              </div>
              <div class="p-2" style={{ marginTop: 30, fontSize: "2em" }}>
                <a href="/requestStatus">Status of Requests</a>
              </div>
              <div class="p-2" style={{ marginTop: 30, fontSize: "2em" }}>
                <a href="/sensorData">Sensor Data</a>
              </div>
              <div class="p-2" style={{ marginTop: 30, fontSize: "2em" }}>
                <Link to="/" onClick={this.handleLogout}>
                  <span class="glyphicon glyphicon-user" />
                  Logout
                </Link>
              </div>
            </div>
          </div>
          <div
            class="col-md-10"
            style={{
              textAlign: "center",
              paddingLeft: 0,
              marginBottom: -9999,
              paddingBottom: 9999
            }}
          >
            <div class="row">
              <div class="col-sm-12">
                <div
                  class="jumbotron jumbotron-fluid"
                  style={{
                    backgroundImage: "url(" + bkg + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no - repeat",
                    backgroundSize: "cover",
                    height: 400,
                    borderRadius: 10,
                    border: "2px solid black"
                  }}
                >
                  <div
                    className="container-fluid"
                    style={{
                      textAlign: "center",
                      border: "1px solid black",
                      borderRadius: 8,
                      backgroundColor: "rgb(255, 255, 255, 0.5)",
                      height: "80%",
                      marginTop: 20
                    }}
                  >
                    <h1
                      style={{
                        textAlign: "center",
                        paddingTop: 30,
                        fontFamily: "Apple Chancery",
                        fontSize: 80,
                        color: "green"
                      }}
                    >
                      Farmer Dashboard
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style={{ textAlign: "center" }}>
              <div
                class="container-fluid"
                style={{ marginBottom: 50, height: 200 }}
              >
                <MapFarmer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FarmerDashboard;

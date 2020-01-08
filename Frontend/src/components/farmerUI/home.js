import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import "./registerAll.css";
import bkg from "../images/Home.jpg";
import bkg2 from "../images/bkg2.jpeg";
import farmer1 from "../images/farmer1.jpg";
import farmer2 from "../images/farmer2.jpg";
import farmer3 from "../images/farmer3.png";
import logoSAC from "../images/logoSAC.png";
import hema from "../images/hema.jpeg";
import maahi from "../images/maahi.jpg";
import lakshmi from "../images/lakshmi.jpeg";
import Venice from "../images/Venice.jpg";
import Navbar from "./navbar";
import Footer from "./footer";
///farmerUI/BackdropSmartAgLogin.jpg

class Home extends Component {
  constructor(props) {
    super(props);
    /* this.state = {
                    redirectFlag: false,
                }*/
  }
  //SESSION CHECK FOR USER LOGIN. DESIGN A NAVBAR FOR HOME WITH FAMER USERNAME ON TOP
  render() {
    return (
      <div
        style={{
          backgroundImage:
            "-webkit-linear-gradient(top, #edffd3 0%,#FFF8DC ,#edffd3 )",
          backgroundPosition: "center",
          backgroundRepeat: "no - repeat",
          backgroundSize: "cover"
        }}
      >
        <Navbar />
        <div
          class="jumbotron jumbotron-fluid"
          style={{
            backgroundImage: "url(" + bkg + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no - repeat",
            backgroundSize: "cover",
            height: 600
          }}
        >
          <div
            className="container-fluid"
            style={{
              textAlign: "center",
              border: "1px solid black",
              borderRadius: 8,
              backgroundColor: "rgb(255, 255, 255, 0.5)",
              height: "80%"
            }}
          >
            <div class="home-card">
              <div class="card-body">
                <h1
                  class="card-text"
                  style={{
                    fontFamily: "garamond",
                    fontWeight: "Bold",
                    fontSize: "20",
                    opacity: "1.0"
                  }}
                >
                  Welcome
                </h1>
              </div>
              <img
                src={logoSAC}
                alt="Card image"
                style={{ backgroundColor: "#fffff" }}
              />
              <hr />
              <div class="card-body">
                <button
                  className="btn"
                  href="http://localhost:3000/login"
                  type="submit"
                  style={{
                    height: 50,
                    marginRight: 20,
                    borderRadius: 12
                  }}
                >
                  <a href="http://localhost:3000/login">Login</a>
                </button>
                <button
                  className="btn"
                  type="submit"
                  onClick="location.href='/registerAll"
                  style={{ height: 50, marginLeft: 20 }}
                >
                  {" "}
                  <a href="/registerAll">Register</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="container-fluid"
          style={{
            border: "1px solid black",
            borderRadius: 10,
            boxShadow: "3px 3px 3px #888888",
            backgroundImage:
              "-webkit-linear-gradient(bottom, 	#FFF8DC 0%,#FAFFF4 ,#FAFFF4 )",
            backgroundColor: "rgb(255, 255, 255, 0.5)"
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Apple Chancery",
              fontSize: 45,
              fontWeight: "Bold"
            }}
          >
            What we do...
          </h1>
        </div>
        <br />
        <div class="row" style={{ display: "flex", justifyContent: "center" }}>
          <div class="col-lg-3">
            <div
              className="card"
              style={{
                border: "2px solid black",
                height: "100%",
                boxShadow: "3px 3px 3px #888888",
                borderRadius: 10,
                width: "100%"
              }}
            >
              <img
                class="card-img-top"
                src={farmer1}
                style={{ width: "100%", height: 200, borderRadius: 10 }}
              />
              <div
                class="card-body"
                style={{
                  paddingLeft: 3,
                  paddingRight: 3,
                  paddingBottom: 5,
                  fontFamily: "garamond",
                  fontSize: 16
                }}
              >
                {" "}
                <br />
                Helping the farmers make their job easier is our main objective!
                Get all the details of your sensors in your hand. You can add
                sensors with just a click! You can view the location of your
                sensors in a map. Simply click on the sensor and view it's
                status. Yes it's that easy now.
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div
              className="card"
              style={{
                border: "2px solid black",
                height: "100%",
                boxShadow: "3px 3px 3px #888888",
                borderRadius: 10,
                width: "100%"
              }}
            >
              <img
                class="card-img-top"
                src={farmer2}
                style={{ width: "100%", height: 200, borderRadius: 10 }}
              />

              <div
                class="card-body"
                style={{
                  paddingLeft: 3,
                  paddingRight: 3,
                  paddingBottom: 5,
                  fontFamily: "garamond",
                  fontSize: 16
                }}
              >
                {" "}
                <br />
                View your field network and the location of your sensors in this
                application. No more visiting the field to check your soil
                moisture content or the humidity in the atmosphere or the
                temperature variation. No more worries about the impact the
                unpredicted environment can cause you. Let the sensors do the
                work for you. Get all the information using this easy
                application.
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div
              className="card"
              style={{
                border: "2px solid black",
                height: "100%",
                boxShadow: "3px 3px 3px #888888",
                borderRadius: 10,
                width: "100%"
              }}
            >
              <img
                class="card-img-top"
                src={farmer3}
                style={{ width: "100%", height: 200, borderRadius: 10 }}
              />
              <div
                class="card-body"
                style={{
                  paddingLeft: 3,
                  paddingRight: 3,
                  paddingBottom: 5,
                  fontFamily: "garamond",
                  fontSize: 16
                }}
              >
                {" "}
                <br />
                Always afraid to know when your sensors might give up? Are you
                tired of analyzing all the information that your sensors give to
                you? Is it all numbers for you? We are here to help you provide
                all this information in a format which is easy for you to
                understand. Graphs. All you have to do is click a button and
                view the colourful and attractive representation of your data.
              </div>
            </div>
          </div>
        </div>
        <br />
        <div
          class="container-fluid"
          style={{
            border: "1px solid black",
            borderRadius: 10,
            boxShadow: "3px 3px 3px #888888",
            backgroundImage:
              "-webkit-linear-gradient(bottom, 	#FFF8DC 0%,#FAFFF4 ,#FAFFF4 )",
            backgroundColor: "rgb(255, 255, 255, 0.5)"
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Apple Chancery",
              fontSize: 45,
              fontWeight: "Bold"
            }}
          >
            Who we are...
          </h1>
        </div>
        <br />
        <div
          class="row"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: 20,
            paddingRight: 20
          }}
        >
          <div class="col-lg-3">
            <div
              className="card"
              style={{
                border: "2px solid black",
                height: "100%",
                borderRadius: 10,
                width: "100%"
              }}
            >
              <img
                class="card-img-top"
                src={hema}
                style={{ width: "100%", height: 200, borderRadius: 10 }}
              />
              <div
                class="card-body"
                style={{
                  paddingLeft: 3,
                  paddingRight: 3,
                  paddingBottom: 5,
                  fontFamily: "garamond",
                  fontSize: 16
                }}
              >
                {" "}
                <br />
                <h3>Hema Prasanthi</h3>
                She is the infrastructure manager of this application.
                Responsible for handling the infrastructure design, the cluster
                and node allocation and the overall server load distribution for
                all the farmers spread out across the world. Hema is currently a
                Masters student in SJSU
              </div>
            </div>
          </div>{" "}
          <div class="col-lg-3">
            <div
              className="card"
              style={{
                border: "2px solid black",
                height: "100%",
                borderRadius: 10,
                width: "100%"
              }}
            >
              <img
                class="card-img-top"
                src={lakshmi}
                style={{ width: "100%", height: 200, borderRadius: 10 }}
              />
              <div
                class="card-body"
                style={{
                  paddingLeft: 3,
                  paddingRight: 3,
                  paddingBottom: 5,
                  fontFamily: "garamond",
                  fontSize: 16
                }}
              >
                {" "}
                <br />
                <h3>Lakshmi Kameswari</h3>
                She is the IOT Manager and is the responsible designing the
                design of IOT infrastructure for individual farmer. She is also
                responsible for approving the addition and removal of sensors as
                requested by the farmers, thereby ensuring that the right IOT
                sensors are added on the basis of requirement generated by the
                farmers. Lakshmi is currently a Masters student at SJSU.
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div
              className="card"
              style={{
                border: "2px solid black",
                height: "100%",
                borderRadius: 10,
                width: "100%"
              }}
            >
              <img
                class="card-img-top"
                src={maahi}
                style={{ width: "100%", height: 200, borderRadius: 10 }}
              />

              <div
                class="card-body"
                style={{
                  paddingLeft: 3,
                  paddingRight: 3,
                  paddingBottom: 5,
                  fontFamily: "garamond",
                  fontSize: 16
                }}
              >
                {" "}
                <br />
                <h3>Maahi Chatterjee</h3>
                She is responsible for managing the farmer designs so that every
                farmer has their own account and do not interefere with the
                accounts of other farmers. She is responsible for designing and
                maintaing an easy user interface for helping the farmers
                navigate through the application and ensuring that they are able
                to use the application to it's most. Maahi is currently a
                Masters student at SJSU.
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div
              className="card"
              style={{
                border: "2px solid black",
                height: "100%",
                borderRadius: 10,
                width: "100%"
              }}
            >
              <img
                class="card-img-top"
                src={Venice}
                style={{ width: "100%", height: 200, borderRadius: 10 }}
              />
              <div
                class="card-body"
                style={{
                  paddingLeft: 3,
                  paddingRight: 3,
                  paddingBottom: 5,
                  fontFamily: "garamond",
                  fontSize: 16
                }}
              >
                {" "}
                <br />
                <h3>Wenyan He</h3>
                He is the brains behind designing the design of nodes and the
                simulated sensors. He designed the structure of nodes and the
                allocation of sensors to the right node to ensure that no
                duplication of sensors take place. He has researched how sensors
                respond to threshold values and for designing the simulation for
                the same. Wenyan is currently a Masters student at SJSU.
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Home);

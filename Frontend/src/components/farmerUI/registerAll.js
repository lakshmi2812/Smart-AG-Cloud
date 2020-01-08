import React, { Component } from "react";
import validator from "validator";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import "./registerAll.css";
import bkg from "../images/bkg.jpg";
import logoSAC from "../images/logoSAC.png";
import Navbar from "./navbar";
///farmerUI/BackdropSmartAgLogin.jpg

class RegisterAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fname: "",
      Lname: "",
      email: "",
      password: "",
      pNo: "",
      country: "",
      type: "",
      state: "",
      city: "",
      uname: "",
      rFlag: false
    };
    this.handleFname = this.handleFname.bind(this);
    this.handleLname = this.handleLname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handlePno = this.handlePno.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleUname = this.handleUname.bind(this);
    this.handleType = this.handleType.bind(this);
  }

  handleFname = e => {
    this.setState({ Fname: e.target.value });
  };

  handleLname = e => {
    this.setState({ Lname: e.target.value });
  };

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };
  handlePno = e => {
    this.setState({ pNo: e.target.value });
  };
  handleCountry = e => {
    this.setState({ country: e.target.value });
  };
  handleCity = e => {
    this.setState({ city: e.target.value });
  };
  handleState = e => {
    this.setState({ state: e.target.value });
  };
  handleUname = e => {
    this.setState({ uname: e.target.value });
  };
  handleType = e => {
    this.setState({ type: e.target.value });
  };

  handleRegister = e => {
    const data = {
      Fname: this.state.Fname,
      Lname: this.state.Lname,
      email: this.state.email,
      password: this.state.password,
      username: this.state.uname,
      type: "farmer",
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      pNo: this.state.pNo
    };

    console.log(data);
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:3001/registerAll", data).then(response => {
      console.log(Response.status);
      if (response.status === 200) {
        this.setState({
          rFlag: true
        });
        // console.log(response.body);
        console.log("Successful Registration");
        alert("User successfully registered");
      } else {
        this.setState({
          rFlag: false
        });
        alert("Check your values");
      }
    });
  };

  //SESSION CHECK IF ALREADY LOGGED IN GIVE MESSAGE LOG OUT AND REDIRECT TO THE DASHBOARD OF THE USER
  render() {
    let redirectVar = null;
    if (this.state.rFlag) {
      redirectVar = <Redirect to="/farmerDashboard" />;
    }
    return (
      <div>
        {redirectVar}
        <Navbar />
        <div
          className="container-fluid"
          style={{
            backgroundImage: "url(" + bkg + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no - repeat",
            backgroundSize: "cover",
            textAlign: "center"
          }}
        >
          <div class="card" style={{}}>
            <div class="card-body">
              <h1
                className="text-center"
                style={{
                  fontFamily: "garamond",
                  fontWeight: "Bold",
                  fontSize: "20",
                  opacity: "1.0",
                  textAlign: "center"
                }}
              >
                {" "}
                Thank You! For choosing us!!
              </h1>
              <h3
                className="text-center"
                style={{
                  fontFamily: "garamond",
                  fontWeight: "Bold",
                  fontSize: "20",
                  opacity: "1.0",
                  textAlign: "center"
                }}
              >
                {" "}
                We are here to help you!
              </h3>
            </div>
            <img
              src={logoSAC}
              alt="Card image"
              style={{ textAlign: "center" }}
            />
          </div>
          <br />
          <div
            class="login-form"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="main div"
              style={{
                backgroundColor: "rgb(255,255,255,0.5)",
                borderStyle: "bold",
                borderColor: "black",
                borderRadius: 15,

                paddingTop: 10,
                width: 750
              }}
            >
              <h2
                style={{
                  fontFamily: "garamond",
                  fontWeight: "Bold",
                  fontSize: "20",
                  opacity: "1.0",
                  textAlign: "center"
                }}
              >
                Register with us
              </h2>
              <h4
                style={{
                  fontFamily: "garamond",
                  fontWeight: "Bold",
                  fontSize: "20",
                  opacity: "1.0",
                  textAlign: "center"
                }}
              >
                Already have an account? <Link to="login">Login</Link> here
              </h4>
              <hr />
              <form class="form-inline">
                <label
                  style={{
                    marginRight: 20,

                    fontFamily: "Garamond",
                    fontSize: 22
                  }}
                >
                  First Name :{" "}
                </label>
                <input
                  type="fname"
                  class="form-control mb-2 mr-sm-2"
                  placeholder="First Name"
                  onChange={this.handleFname}
                  style={{
                    borderRadius: 10,
                    borderColor: "black",
                    borderWidth: 2,
                    height: 50,
                    width: 200
                  }}
                />

                <label
                  style={{
                    marginRight: 10,
                    marginLeft: 7,
                    fontFamily: "Garamond",
                    fontSize: 22
                  }}
                >
                  Last Name :{" "}
                </label>
                <input
                  type="lname"
                  class="form-control mb-2 mr-sm-2"
                  placeholder="Last Name"
                  onChange={this.handleLname}
                  style={{
                    borderRadius: 10,
                    borderColor: "black",
                    borderWidth: 2,
                    height: 50,
                    width: 200
                  }}
                />
              </form>
              <br />
              <form class="form-inline">
                <label
                  style={{
                    marginRight: 20,

                    fontFamily: "Garamond",
                    fontSize: 22
                  }}
                >
                  Type of User :{" "}
                </label>
                <select
                  class="form-control"
                  style={{
                    marginRight: 20,

                    height: 50,
                    width: 520,
                    borderRadius: 12,
                    borderColor: "black",
                    borderWidth: 2
                  }}
                  onChange={this.type}
                >
                  <option>Farmer</option>
                  <option>IOT Manager</option>
                  <option> Infrastructure Manager</option>
                </select>
              </form>
              <form class="form-inline">
                <label
                  style={{
                    marginRight: 15,

                    fontFamily: "Garamond",
                    fontSize: 22
                  }}
                >
                  User Name :{" "}
                </label>
                <input
                  type="uname"
                  class="form-control mb-2 mr-sm-2"
                  placeholder="User Name"
                  onChange={this.handleUname}
                  required="text"
                  style={{
                    borderRadius: 10,
                    borderColor: "black",
                    borderWidth: 2,
                    height: 50,
                    width: 180
                  }}
                />

                <label
                  style={{
                    marginLeft: 7,
                    marginRight: 15,
                    fontFamily: "Garamond",
                    fontSize: 22
                  }}
                >
                  Phone Number :{" "}
                </label>
                <input
                  type="pno"
                  class="form-control mb-2 mr-sm-2"
                  placeholder="Phone Number"
                  onChange={this.handlePno}
                  style={{
                    borderRadius: 10,
                    borderColor: "black",
                    borderWidth: 2,
                    height: 50,
                    width: 180
                  }}
                />
              </form>
              <br />
              <form class="form-inline">
                <label
                  style={{
                    marginRight: 40,
                    fontFamily: "Garamond",
                    fontSize: 22
                  }}
                >
                  City :{" "}
                </label>
                <input
                  type="city"
                  class="form-control mb-2 mr-sm-2"
                  placeholder="City"
                  onChange={this.handleCity}
                  required="text"
                  style={{
                    borderRadius: 10,
                    borderColor: "black",
                    borderWidth: 2,
                    height: 50,
                    width: 217,
                    marginLeft: 32
                  }}
                />

                <label
                  style={{
                    marginRight: 10,
                    marginLeft: 30,
                    fontFamily: "Garamond",
                    fontSize: 22
                  }}
                >
                  State :{" "}
                </label>
                <input
                  type="state"
                  class="form-control mb-2 mr-sm-2"
                  placeholder="State"
                  onChange={this.handleState}
                  style={{
                    borderRadius: 10,
                    borderColor: "black",
                    borderWidth: 2,
                    height: 50,
                    width: 230
                  }}
                />
              </form>
              <br />

              <form class="form-inline">
                <label
                  style={{
                    marginRight: 0,
                    marginLeft: 0,
                    fontFamily: "Garamond",
                    fontSize: 22
                  }}
                >
                  Country :{" "}
                </label>
                <input
                  type="country"
                  className="form-control1"
                  placeholder="Country"
                  onChange={this.handleCountry}
                  required="text"
                  style={{
                    marginLeft: 30,
                    height: 50,
                    width: 547,
                    borderRadius: 12,
                    borderColor: "black",
                    borderWidth: 2
                  }}
                />
                <br />
              </form>
              <form class="form-inline">
                <label
                  style={{
                    marginRight: 20,
                    marginLeft: 25,
                    fontFamily: "Garamond",
                    fontSize: 22
                  }}
                >
                  Email :{" "}
                </label>
                <input
                  type="email"
                  className="form-control1"
                  placeholder="Email"
                  onChange={this.handleEmail}
                  required="text"
                  style={{
                    marginRight: 20,
                    marginLeft: 32,
                    height: 50,
                    width: 550,
                    borderRadius: 12,
                    borderColor: "black",
                    borderWidth: 2
                  }}
                />
                <br />
              </form>
              <form class="form-inline">
                <label
                  style={{
                    marginRight: 20,
                    marginLeft: 25,
                    fontFamily: "Garamond",
                    fontSize: 22
                  }}
                >
                  Password :{" "}
                </label>
                <input
                  type="Password"
                  className="form-control1"
                  placeholder="Password"
                  onChange={this.handlePassword}
                  required="text"
                  style={{
                    marginRight: 20,

                    height: 50,
                    width: 550,
                    borderRadius: 12,
                    borderColor: "black",
                    borderWidth: 2
                  }}
                />
                <br />
                <br />
              </form>
              <hr />
              <button
                className="btn"
                type="submit"
                onClick={this.handleRegister}
                style={{
                  width: "92%",
                  height: 50,
                  textAlign: "center",
                  borderRadius: 12,
                  borderColor: "black",
                  borderWidth: 2
                }}
              >
                Register
              </button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(RegisterAll);

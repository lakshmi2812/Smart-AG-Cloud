import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import Navbar from "./navbar";
import axios from "axios";

class AddASensorFinal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorType: "",
      sensorXcoordinate: "",
      sensorYcoordinate: "",
      farmerID: "",
      asFlag: false
    };
    this.handleSensorType = this.handleSensorType.bind(this);
    this.handleSensorXcoordinate = this.handleSensorXcoordinate.bind(this);
    this.handleSensorYcoordinate = this.handleSensorYcoordinate.bind(this);
    this.handleAddASensorFinal = this.handleAddASensorFinal.bind(this);
    //this.handlefarmerID = this.handlefarmerID.bind(this);
  }
  handleSensorType = e => {
    this.setState({ sensorType: e.target.value });
  };

  handleSensorXcoordinate = e => {
    this.setState({ sensorXcoordinate: e.target.value });
  };

  handleSensorYcoordinate = e => {
    this.setState({ sensorYcoordinate: e.target.value });
  };
  handleAddASensorFinal = e => {
    console.log("handle add request");
    const data = {
      sensorType: this.state.sensorType,
      sensorXcoordinate: this.state.sensorXcoordinate,
      sensorYcoordinate: this.state.sensorYcoordinate,
      farmerID: this.state.farmerID
    };
    console.log(data);
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:3001/addASensorFinal", data);
    //.then(response => {
    // console.log(Response.status);
    // if (response.status == 200) {
    // this.setState({
    // asFlag: true
    //});
    //console.log(this.asFlag);
    //console.log("Sensor added successfully");
    alert("Sensor added successfully");
    //} else {
    //this.setState({
    //asFlag: false
    //});
    //alert("Check your values");
    //}
    //});
  };
  render() {
    let redirectVar = null;
    if (this.state.asFlag) {
      redirectVar = <Redirect to="/farmerDashboard" />;
    }
    return (
      <div>
        {redirectVar}
        <Navbar />

        <div class="container">
          <h3>
            <Link to="/farmerDashboard">Back to Dashboard</Link>
          </h3>
          <form>
            <div style={{ width: "30%" }} class="form-group">
              <input
                type="text"
                class="form-control"
                onChange={this.handleSensorType}
                placeholder="Sensor Type"
              />
            </div>
            <br />
            <div style={{ width: "30%" }} class="form-group">
              <input
                type="text"
                class="form-control"
                onChange={this.handleSensorXcoordinate}
                placeholder="Sensor Latitude"
              />
            </div>
            <br />
            <div style={{ width: "30%" }} class="form-group">
              <input
                type="text"
                class="form-control"
                onChange={this.handleSensorYcoordinate}
                placeholder="Sensor Longitude"
              />
            </div>
            <br />
            <br />
            <div style={{ width: "30%" }}>
              <button
                className="btn"
                type="submit"
                onClick={this.handleAddASensorFinal}
                style={{
                  width: "92%",
                  height: 50,
                  textAlign: "center",
                  borderRadius: 12,
                  borderColor: "black",
                  borderWidth: 2
                }}
              >
                Generate a Request
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(AddASensorFinal);

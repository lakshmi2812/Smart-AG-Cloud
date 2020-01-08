import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import Navbar from "./navbar";
import axios from "axios";

class RemoveASensor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorXcoordinate: "",
      sensorYcoordinate: "",

      dsFlag: false
    };
    this.handleSensorXcoordinate = this.handleSensorXcoordinate.bind(this);
    this.handleSensorYcoordinate = this.handleSensorYcoordinate.bind(this);
    this.handleRemoveASensor = this.handleRemoveASensor.bind(this);
    //this.handlefarmerID = this.handlefarmerID.bind(this);
  }

  handleSensorXcoordinate = e => {
    this.setState({ sensorXcoordinate: e.target.value });
  };

  handleSensorYcoordinate = e => {
    this.setState({ sensorYcoordinate: e.target.value });
  };
  handleRemoveASensor = e => {
    const data = {
      sensorXcoordinate: this.state.sensorXcoordinate,
      sensorYcoordinate: this.state.sensorYcoordinate
    };
    console.log(data);
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:3001/removeASensor", data).then(response => {
      console.log(Response.status);
      if (response.status == 200) {
        this.setState({
          dsFlag: true
        });
        console.log(this.asFlag);
        console.log("Sensor deleted successfully");
        alert("Sensor deleted successfully");
      } else {
        this.setState({
          dsFlag: false
        });
        alert("Check your values");
      }
    });
  };
  render() {
    let redirectVar = null;
    if (this.state.dsFlag) {
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
                onClick={this.handleRemoveASensor}
                style={{
                  width: "92%",
                  height: 50,
                  textAlign: "center",
                  borderRadius: 12,
                  borderColor: "black",
                  borderWidth: 2
                }}
              >
                Remove Sensor
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(RemoveASensor);

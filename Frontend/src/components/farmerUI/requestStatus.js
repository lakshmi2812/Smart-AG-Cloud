import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";

class RequestStatus extends Component {
  constructor() {
    super();
    this.state = {
      sensors: []
    };
  }
  //get the sensors data from backend
  componentDidMount() {
    axios.get("http://localhost:3001/requestStatus").then(response => {
      //update the state with the response data
      this.setState({
        sensors: this.state.sensors.concat(response.data)
      });
    });
  }

  render() {
    //iterate over sensors to create a table row
    let details = this.state.sensors.map(sensor => {
      return (
        <tr>
          <td>{sensor.sensorId}</td>
          <td>{sensor.sensorType}</td>
          <td>{sensor.sensorLocation}</td>
        </tr>
      );
    });
    //if not logged in go to login page
    let redirectVar = null;
    /* if (!cookie.load("cookie")) {
          redirectVar = <Redirect to="/login" />;
        }*/
    return (
      <div>
        {redirectVar}
        <div class="container">
          <h2>List of All Requests</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Resquest Type</th>
                <th>Sensor Type</th>
                <th>Request Made On</th>
                <th>Request Status</th>
              </tr>
            </thead>
            <tbody>
              {/*Display the Tbale row based on data recieved*/}
              {details}
              <tr>
                <td>Req1</td>
                <td>Add a Sensor</td>
                <td>Temperature</td>
                <td>03/28/2019</td>
                <td>Complete</td>
              </tr>
              <tr>
                <td>Req2</td>
                <td>Add a Sensor</td>
                <td>Soil Moisture</td>
                <td>04/16/2019</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>ReqR1</td>
                <td>Remove a Sensor</td>
                <td>Temperature</td>
                <td>03/30/2019</td>
                <td>Complete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
//export Home Component
export default RequestStatus;

import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import cookie from "react-cookies";
import { Link, withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import Navbar from "./navbar";

class ListOfSensors extends Component {
  constructor() {
    super();
    this.state = {
      sensors: []
    };
  }
  //get the sensors data from backend
  componentDidMount() {
    axios.get("http://localhost:3001/listOfSensors").then(response => {
      //update the state with the response data
      // var response1 = JSON.parse(response.data);
      //console.log(response1);
      console.log(response.data);
      this.setState({
        sensors: this.state.sensors.concat(response.data)
      });
      console.log(this.sensors);
    });
  }

  render() {
    //iterate over sensors to create a table row
    let details = this.state.sensors.map(sensor => {
      return (
        <tr>
          <td>
            <Link to="/sensorData">{sensor.ID}</Link>
          </td>
          <td>{sensor.sensorType}</td>
          <td>{sensor.x_coordinate}</td>
          <td>{sensor.y_coordinate}</td>
          <td>{sensor.status}</td>
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
        <Navbar />
        <div class="container">
          <h3>
            <Link to="/farmerDashboard">Back to Dashboard</Link>
          </h3>
          <h2>List of All Sensors</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Sensor ID</th>
                <th>Sensor Type</th>
                <th>Sensor Latitude</th>
                <th>Sensor Longitude</th>
                <th>Sensor Status</th>
              </tr>
            </thead>
            <tbody>
              {/*Display the Tbale row based on data recieved*/}
              {details}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
//export Home Component
export default ListOfSensors;

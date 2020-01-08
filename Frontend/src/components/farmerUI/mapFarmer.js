import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import bkg from "../images/farmerDash.jpeg";
import { InfoWindow, Marker } from "google-maps-react";
import axios from "axios";

const mapStyles = {
  width: "60%",
  height: 500,
  marginLeft: 250
};

export class MapFarmer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {},
      sensors: []
    };
    // this.onMarkerClick = this.onMarkerClick.bind(this);
  }
  componentDidMount() {
    //window.localStorage.setItem("jobId", this.props.location.state.displayprops);
    //  localStorage.setItem("jobTitle", data.jobTitle)
    axios.get("http://localhost:3001/listOfSensorsMap").then(response => {
      console.log("Response : ", response.data);
      this.setState({
        sensors: this.state.sensors.concat(response.data)
      });
      console.log(this.sensors);
    });
  }
  onMarkerClick = e =>
    this.setState({
      selectedPlace: "SJ",
      activeMarker: "SJSU",
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    //let details = this.state.sensors.map(sensor => {
    let details = this.state.sensors.map(sensor => {
      return (
        <Marker
          onClick={this.onMarkerClick}
          name={"Sensor ID"}
          position={{ lat: sensor.lat, lng: sensor.lng }}
        />
      );
    });

    return (
      <div class="container-fluid">
        <div>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Apple Chancery",
              fontSize: 50,
              color: "black"
            }}
          >
            Map showing Sensors
          </h2>
          <br />
          <Map
            google={this.props.google}
            zoom={10}
            style={mapStyles}
            initialCenter={{
              lat: 37.3346,
              lng: -121.8753
            }}
          >
            {details}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAa9TWcasf6E383DBzUqzHcYSAg1rtntDg"
})(MapFarmer);

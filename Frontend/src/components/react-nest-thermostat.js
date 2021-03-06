import React from "react";
import ReactDOM from "react-dom";
import { CircleSlider } from "react-circle-slider";
import SwitchExample from './Switch';
import {updateSwitch} from '../actions';
import { CommentActions } from "semantic-ui-react";
import { connect } from "react-redux";
 
 
class Thermostat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          value: 25,
          switchState: true
        };
    }
 
    handleChange = value => {
        console.log(`Changed value ${value}`);
        this.setState({ value });
    };
 
    handleChangeRange = event => {
        this.setState({
            value: event.target.valueAsNumber,
        });
    };
 
    render() {
        let styles = {
          width:'18rem'
        }
        let iconStyle = {
          width:"20px",
          height:"20px"
        }
        let w3cardstyle = {
          width: "100%"
        }
        const { value } = this.state;
        console.log('SWITCH STATE in THERMOSTAT =>', this.props.switchState);
        let showSensorStatus = this.props.switchState ? "OFF" : "ON"
        return (
            <div class="container">
              <div class="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-8">
                  <div class="card text-white bg-success" style={{styles}}>
                    <img class="custom-card-img-top" src="/temperature.png" alt="Card image cap"/>
                    <div class="card-body">
                      <h3 class="card-title">Temperature Sensor</h3>
                      <p class="card-text"></p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Temperature Reading: <b>{this.state.value} <sup>o</sup><strong>F</strong></b></li>
                      <li class="list-group-item">
                        <h5>SENSOR STATUS:<strong>{showSensorStatus}</strong></h5>
                        <h5><SwitchExample checked={true}/></h5>
                      </li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="card-body">
                      <CircleSlider value={value} onChange={this.handleChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  switchState: state.switchState
})

export default connect(
  mapStateToProps,
  { updateSwitch }
)(Thermostat);

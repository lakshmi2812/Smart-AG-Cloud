import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
import SwitchExample from './Switch';
import {updateSwitch} from '../actions';
import { CommentActions } from "semantic-ui-react";
import { connect } from "react-redux";
 
class SoilNutrition extends Component{
    constructor(props){
        super(props)
        this.state = {
            sliderState: 6
        }
    }
    handleSliderChange = (e) => {
        e.preventDefault;
        this.setState({
            sliderState: e
        })
        console.log('Slider current Value: =>', this.state.sliderState);
    }
    render(){
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
          let showSensorStatus = this.props.switchState ? "OFF" : "ON"
        return(
            <div class="container">
              <div class="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-8">
                  <div class="card text-white bg-success" style={{styles}}>
                    <img class="custom-card-img-top" src="/ph-meter.jpg" alt="Card image cap"/>
                    <div class="card-body">
                      <h3 class="card-title">Soil Nutrition(pH) Sensor</h3>
                      <p class="card-text"></p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">pH Reading: <b><strong>{this.state.sliderState}</strong></b></li>
                      <li class="list-group-item">
                        <h5>SENSOR STATUS:<strong>{showSensorStatus}</strong></h5>
                        <h5><SwitchExample checked={true}/></h5>
                      </li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="card-body">
                      <Slider className="custom-rc-slider" min={0} max={15} defaultValue={5} onChange={(e) => this.handleSliderChange(e)}/>
                      {/* <Range /> */}
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
  )(SoilNutrition);
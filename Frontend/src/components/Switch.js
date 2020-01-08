import React, { Component } from "react";
import Switch from "react-switch";
import { updateSwitch } from "../actions";
import { connect } from "react-redux";
 
class SwitchExample extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: this.props.checked };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked: !this.state.checked });
    console.log('Switch STATE: ->',this.state)
    this.props.updateSwitch(this.state.checked);
  }
 
  render() {
    return (
      <label>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}

const mapStateToProps = state => ({
    farmers: state.allFarmers
  });

  export default connect(
    mapStateToProps,
    { updateSwitch }
  )(SwitchExample);

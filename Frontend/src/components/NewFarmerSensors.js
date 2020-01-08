import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./Sidebar.js";
import { fetchNode } from "../actions";
import { fetchFarmerSensors } from "../actions";
import { postCourse } from "../actions";
import { regCourse } from "../actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class NewFarmerSensors extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedSensorID: 1,
      sensors: [
        {
          sensorType: "Humidity",
          status: "on",
          x_coordinate: 37.3229,
          y_coordinate: -122.0321,
          data: {
            //timestamp: ISODate(),
            type: "g/m3",
            value: 12.23
          },
          farmerID: 1,
          //farmerID: {type: Schema.Types.ObjectId},
          nodeID: 1,
          ID: 1,
          sensor_desc: "sensor1 desc",
          sensor_name: "sensor1",
          icon: "/humidity-icon.png"
        },
        {
          sensorType: "Temperature",
          status: "on",
          x_coordinate: 37.3229,
          y_coordinate: -122.0321,
          data: {
            type: "F",
            value: 23.67
          },
          farmerID: 1,
          nodeID: 1,
          ID: 2,
          sensor_desc: "sensor2 desc",
          sensor_name: "sensor2",
          icon: "/temp-icon.png"
        },
        {
          sensorType: "Soil Nutrition",
          status: "off",
          x_coordinate: 37.4323,
          y_coordinate: -121.8995,
          data: {
            type: "pH",
            value: 15.78
          },
          farmerID: 1,
          nodeID: 1,
          ID: 3,
          sensor_desc: "sensor3 desc",
          sensor_name: "sensor3",
          icon: "/ph-icon.jpg"
        },
        {
          sensorType: "Pressure",
          status: "on",
          x_coordinate: 37.4852,
          y_coordinate: -122.2363,
          data: {
            type: "g/m3",
            value: 14.27
          },
          farmerID: 1,
          nodeID: 1,
          ID: 4,
          sensor_desc: "sensor4 desc",
          sensor_name: "sensor4",
          icon: "/pressure-icon.png"
        }
      ],
      course_name: "",
      course_dept: "",
      course_desc: "",
      course_room: "",
      course_capacity: "",
      course_waitlist: "",
      course_term: "",
      isHidden: false,
      regCourseName: ""
    };
  }
  componentDidMount() {
    this.props.fetchFarmerSensors("1");
    console.log("props for course component:", this.props);
  }
  onCourseNameChange = e => {
    this.setState({
      course_name: e.target.value
    });
  };
  onCourseDeptChange = e => {
    this.setState({
      course_dept: e.target.value
    });
  };
  onCourseDescChange = e => {
    this.setState({
      course_desc: e.target.value
    });
  };
  onCourseRoomChange = e => {
    this.setState({
      course_room: e.target.value
    });
  };
  onCourseCapacityChange = e => {
    this.setState({
      course_capacity: e.target.value
    });
  };
  onCourseWaitlistChange = e => {
    this.setState({
      course_waitlist: e.target.value
    });
  };
  onCourseTermChange = e => {
    this.setState({
      course_term: e.target.value
    });
  };

  onSelectChange = e => {
    console.log("??????????????????????????????");
    console.log("Selected course:", e.target.value);
    this.setState({
      regCourseName: e.target.value
    });
  };

  //Faculty
  renderAddCourse = () => {
    console.log("INSIDE renderAddCourse!");
    console.log(
      "is_faculty from store inside Course view:",
      this.props.is_faculty
    );
    if (this.props.is_faculty === "yes") {
      return (
        <div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-5 border border-primary">
              <form method="post">
                <input
                  type="text"
                  onChange={this.onCourseNameChange}
                  placeholder="Course Name"
                  required
                />
                <br />
                <input
                  type="text"
                  onChange={this.onCourseDeptChange}
                  placeholder="Course Dept"
                  required
                />
                <br />
                <input
                  type="text"
                  onChange={this.onCourseDescChange}
                  placeholder="Course Description"
                  required
                />
                <br />
                <input
                  type="text"
                  onChange={this.onCourseRoomChange}
                  placeholder="Course Room"
                  required
                />
                <br />
                <input
                  type="text"
                  onChange={this.onCourseCapacityChange}
                  placeholder="Course Capacity"
                  required
                />
                <br />
                <input
                  type="text"
                  onChange={this.onCourseWaitlistChange}
                  placeholder="Course Waitlist"
                  required
                />
                <br />
                <input
                  type="text"
                  onChange={this.onCourseTermChange}
                  placeholder="Course Term"
                  required
                />
                <br />
                <input
                  type="submit"
                  onClick={this.onSubmitHandler}
                  value="Add Course"
                  className="btn btn-md btn-success"
                />
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  };

  //Student
  renderRegCourse = () => {
    console.log("INSIDE renderAddCourse!");
    console.log(
      "is_faculty from store inside Course view:",
      this.props.is_faculty
    );
    if (this.props.is_faculty === "no") {
      return (
        <div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-5 border border-primary">
              <form method="post">
                {/* <input type="text" onChange={this.onCourseDeptChange} placeholder="Course Dept" required/><br/> */}
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Example select</label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    onClick={this.onSelectChange}
                  >
                    {this.returnSelect()}
                  </select>
                </div>
                <input
                  type="submit"
                  onClick={this.onRegSubmitHandler}
                  value="Reg Course"
                  className="btn btn-md btn-success"
                />
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  };

  returnSelect = () => {
    let course_options = this.props.allCourses.map(eachCourse => {
      return <option>{eachCourse.course_name}</option>;
    });
    return course_options;
  };

  //Faculty
  renderButtonAddCourse = () => {
    if (this.props.is_faculty === "yes") {
      return (
        <div>
          <button onClick={this.toggleForm} className="btn btn-success">
            Add a New Course
          </button>
        </div>
      );
    } else {
      return <div />;
    }
  };

  //Student
  renderButtonRegCourse = () => {
    if (this.props.is_faculty === "no") {
      return (
        <div>
          <button onClick={this.toggleForm} className="btn btn-success">
            Register for Course
          </button>
        </div>
      );
    } else {
      return <div />;
    }
  };

  toggleForm = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    console.log("userId in params:", this.props.match.params.userId);
    let userId = this.props.match.params.userId;
    let data = {
      id: this.props.match.params.userId,
      isFaculty: this.state.isFaculty,
      course_name: this.state.course_name,
      course_dept: this.state.course_dept,
      course_desc: this.state.course_desc,
      course_room: this.state.course_room,
      course_capacity: this.state.course_capacity,
      course_waitlist: this.state.course_waitlist,
      course_term: this.state.course_term
    };
    this.props.postCourse(data, () => {
      this.props.history.push(`/users/${data.id}/courses`);
    });
  };

  onRegSubmitHandler = e => {
    e.preventDefault();
    console.log("userId in params:", this.props.match.params.userId);
    let userId = this.props.match.params.userId;
    let data = {
      id: this.props.match.params.userId,
      isFaculty: this.state.isFaculty,
      regCourse: this.state.regCourseName
    };
    this.props.regCourse(data, () => {
      this.props.history.push(`/users/${data.id}/courses`);
    });
  };

  onSensorUpdateHandler = e => {
    e.preventDefault();
    console.log("^&%$*** Updated sensor: ->",e.target.updated_sensor.value);
    var updated_sensor = Number(e.target.updated_sensor.value);
    var array = [...this.state.sensors]; // make a separate copy of the array
    for(let i = 0; i < array.length; i++){
      if(array[i].data.value === 12.23){
        array[i].data.value = updated_sensor
      }else{
        console.log('############Sensor with that value not found:->',Number(updated_sensor));
      }
    }
    console.log('*****Updated sensor array => ', array);
    this.setState({sensors: array});
      // console.log("^&%$*** Updated sensor: ->",e.target.value);
      // var array = [...this.props.farmer_sensors]; // make a separate copy of the array
      // var index = array.indexOf(e.target.value)
      // if (index !== -1) {
      //   array.splice(index, 1, e.target.value);
      //   this.setState({sensors: array});
      // }
  }

  onSensorDeleteHandler = e => {
    e.preventDefault();
    var array = [...this.state.sensors]; // make a separate copy of the array
    for(let i = 0; i < array.length; i++){
      if(array[i].data.value === 15.26){
        array.splice(i,1);
      }else{
        console.log('############Sensor cannot be deleted!!!');
      }
    }
    console.log('*****Updated sensor array => ', array);
    this.setState({sensors: array});
      // console.log("^&%$*** Updated sensor: ->",e.target.value);
      // var array = [...this.props.farmer_sensors]; // make a separate copy of the array
      // var index = array.indexOf(e.target.value)
      // if (index !== -1) {
      //   array.splice(index, 1, e.target.value);
      //   this.setState({sensors: array});
      // }
  }

  handleSensorSelect = (e) => {
    e.preventDefault();
    console.log('$$$$$$$$ SELECT SENSOR =>',e.target)
    this.setState({
        selectedSensorID: e.target.value,
    })
  }

  render() {
    let props = {
      userid: this.props.match.params.id,
      is_faculty: this.props.is_faculty
    };
    console.log("PROPS in Course View:", this.props);
    console.log("All Courses:", this.props.allCourses);
    const enrolledAs = this.props.is_faculty === "yes" ? "Faculty" : "Student";
    console.log(
      "is_faculty from props in All Courses page:",
      this.props.is_faculty
    );
    console.log("courses in course page:", this.props.courses);
    const farmerSensorItems = this.state.sensors.map(eachSensor => {
      let spinner_class = eachSensor.status === "on" ? "led-green" : "led-red";
      return (
        <tr>
          {/* <td><NavLink to={{pathname:`/users/${this.props.match.params.userId}/courses/${eachCourse._id}`}} >{eachCourse.course_name}</NavLink></td> */}
          <td>{eachSensor.ID}</td>
          <td>
            <div class={spinner_class} />
          </td>
          <td>{eachSensor.data.value}</td>
          <td>{eachSensor.data.type}</td>
          <td>{eachSensor.sensorType}</td>
          <td>
              <form className="form-inline" onSubmit={this.onSensorUpdateHandler}>
                <input type="text" name= "updated_sensor" />
                <input type="submit" value="submit"/>
              </form> 
          </td>
          <td><button type="button" class="btn btn-danger btn-xs" onClick={this.onSensorDeleteHandler}>Delete</button></td>
        </tr>
      );
    });

    let farmerSensorItemsNew = this.state.sensors.map(eachSensor=>{
        let spinner_class = eachSensor.status === "on" ? "led-green" : "led-red";
        let eachSensorURL = `http://localhost:3000/users/1/sensors/${eachSensor.ID}`
        console.log('EACH SENSOR URL=>', eachSensorURL);
        return(
            // <div><div className="row">
            <div>
            <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-5">
                        <div className="card bg-info" style={{width: "22"+"rem"}}>
                            {/* <div className="card-img-top card-color1">
                                qhdqjdqjwhdjq
                            </div> */}
                            <img src={eachSensor.icon} className="card-img-top"/>
                            <div className="card-body">
                                {/* <h5 className="card-title">Card title</h5> */}
                                <p className="card-text"><b>SensorType: {eachSensor.sensorType}</b></p>
                                <p className="card-text"><b><a href={eachSensorURL}>Sensor ID: {eachSensor.ID}</a></b></p>
                                <p className="card-text"><b>Sensor Name: {eachSensor.sensor_name}</b></p>
                            </div>
                        </div>
                    </div>
            </div><br/>
            </div>
        )
    });
    return (
      <div>
        <div className="container">
          <Sidebar />
          {/* <Sidebar {...props}/> */}
          <div className="row">
            <div className="col-md-2" >
            </div>
          </div>
          <div className="row">
            {farmerSensorItemsNew}
          </div>
        </div>
      </div>
    );
  }
}

const matchStateToProps = state => ({
  farmer_sensors: state.farmer_sensors
});

export default connect(
  matchStateToProps,
  { fetchFarmerSensors }
)(NewFarmerSensors);

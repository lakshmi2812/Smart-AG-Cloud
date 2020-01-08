import React, { Component } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { fetchFarmers } from "../actions";
import { connect } from "react-redux";

class Farmers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    console.log("ID in Dashboard:", this.props.match.params.id);
    console.log("Courses in state:", this.state.courses);
    console.log("&&&&Courses in Store in Dashboard:", this.props.courses);
    this.props.fetchFarmers(this.props.match.params.id);
  }

  onSearchTextChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    console.log("PROPS in Dashboard:", this.props);
    console.log("COURSES IN STATE:->", this.props);

    // let filteredCourses = this.props.courses.filter((course)=>{
    //     return course.course_name.indexOf(this.state.search) !== -1;
    // })

    let filteredFarmers =
      this.state.search !== ""
        ? this.props.farmers.filter(u =>
            u.firstName.match(new RegExp(this.state.search))
          )
        : this.props.farmers;

    //console.log('Filtered Courses:', filteredCourses);

    let props = {
      userid: this.props.match.params.id,
      is_faculty: this.props.is_faculty
    };

    let farmerItems = filteredFarmers.map(eachFarmer => {
      return (
        <div>
          <div className="row">
            {/* <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="..." alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> */}
            <div className="col-md-1" />
            <div className="col-md-5">
              <div className="card" style={{ width: "22" + "rem" }}>
                <a href="http://localhost:3000/iot/undefined/farmers/1"><img src={eachFarmer.img} width="200" height="200"/></a>
                <div className="card-body">
                  {/* <h5 className="card-title myCardTitle">{eachFarmer.username}</h5> */}
                  <p className="card-text mycard">
                    <b>{eachFarmer.firstName}</b>
                  </p>
                  {/* <p className="card-text mycard"><b>{eachFarmer.email}</b></p> */}
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      );
    });
    return (
      <div>
        <Sidebar {...props} />
        <div className="dashboard-container container">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-11">
              <form>
                <label for="" search>
                  <h2>Search for Farmers here:</h2>
                </label>
                <input
                  type="text"
                  className="search-box"
                  onChange={this.onSearchTextChange}
                />
              </form>
              <br />
              <br />
              <div>{farmerItems}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  farmers: state.allFarmers
});

export default connect(
  mapStateToProps,
  { fetchFarmers }
)(Farmers);

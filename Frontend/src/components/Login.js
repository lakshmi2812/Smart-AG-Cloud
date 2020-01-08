import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
//import Main from "./Main";
import logoSAC from "./images/logoSAC.png";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      authFlag: false,
      redirect: false,
      current_user_id: undefined,
      redirectVar: ""
    };
  }
  componentDidMount() {
    this.setState({
      authFlag: false
    });
  }

  // componentDidMount(){
  //     this.props.fetchUser();
  // }

  onUsernameChangeHandler = e => {
    this.setState({
      username: e.target.value
    });
  };

  onPasswordChangeHandler = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("***Submitted form***");
    let userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.fetchUser(userData, id => {
      console.log("INSIDE fetch user action!");
      console.log("PROPS:", this.props);
      console.log(id);
      //this.props.history.push(`/dashboard/${id}`);
      if (this.props.login.userType === "iot_support") {
        this.props.history.push(`/iot/${id}/farmers/`);
      } else {
        this.props.history.push(`/farmerDashboard`);
      }
      //this.props.history.push(`/`);
    });
  };
  render() {
    //console.log(this.props);
    //const { handleSubmit } = this.props;
    // console.log('redirect value:',this.state.redirect);
    // console.log('current user id:',this.state.redirectVar);
    return (
      <div>
        {/* {this.state.redirectVar} */}
        {/* <h1>Hellooo!!!</h1> */}
        <div className="container">
          <div className="row centered-form">
            <div className="centered-form">
              <div className="panel panel-default centered-panel login-card">
                <div className="panel-heading">
                  <div className="border-div">
                    <img src={logoSAC} alt="smartag_logo" className="logo" />
                  </div>
                  <br />
                  <h3 className="panel-title">
                    {" "}
                    <small />
                  </h3>
                </div>
                <br />
                <div class="panel-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        onChange={this.onUsernameChangeHandler}
                        name="name"
                        id="name"
                        class="form-control input-sm"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        onChange={this.onPasswordChangeHandler}
                        name="email"
                        id="email"
                        class="form-control input-sm"
                        placeholder="Password"
                      />
                    </div>
                    <input
                      type="submit"
                      value="Sign In"
                      className="btn btn-success btn-block"
                    />
                  </form>
                  <div class="centered-form">
                    <h5>New User?</h5>
                    <a href="#">Farmers Signup</a>&nbsp;&nbsp;
                    <a href="#">Infrastructure Manager Signup</a>
                    <a href="#">IOT Support SignUp</a>&nbsp;&nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newState: state,
    login: state.login
  };
};

//  const mapDispatchToProps = dispatch => {
//     return {fetchUser: (data,callback) => dispatch({ type:'FETCH_USER' })}
// //   bindActionCreators(
// //     {
// //       fetchUser
// //     },
// //     dispatch
// //);

//  }

export default connect(
  mapStateToProps,
  { fetchUser }
)(Login);
//export default Login;
// export default reduxForm({
//     form: "login-form"
//   })(connect(null, { fetchUser })(Login));

{
  /* <html>
	<head>
		<title>Login Page</title>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
		<!-- jQuery library -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<!-- Latest compiled JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
		<link rel="stylesheet" href="styles.css">
	</head>
	<body>
		<div class="container">
            <div class="row centered-form">
                <div class="centered-form">
                    <div class="panel panel-default centered-panel login-card">
                        <div class="panel-heading">
                            <div className="border-div">
                                <img src="logoSAC.png" alt="sjsu_logo" class="logo"/>
                            </div><br/>
                                <h3 class="panel-title"> <small></small></h3>
                            </div>
                                <br/>
                            <div class="panel-body">
                                <form onSubmit={this.onSubmit}>
                                    <div class="form-group">
                                        <input type="text" onChange={this.onUsernameChangeHandler} name="name" id="name" class="form-control input-sm" placeholder="Username"/>
                                	</div>
                                    <div class="form-group">
                                        <input type="password" onChange={this.onPasswordChangeHandler} name="email" id="email" class="form-control input-sm" placeholder="Password"/>
                                	</div>
                                        <input type="submit" value="Sign In" class="btn btn-success btn-block"/>
                                </form>
                                <div class="centered-form">
	                             	<h5>New User?</h5>
	                                <a href="#">Farmers Signup</a>&nbsp;&nbsp;<a href="#">Infrastructure Manager Signup</a><a href="#">IOT Support SignUp</a>&nbsp;&nbsp;
                            	</div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
	</body>
</html> */
}

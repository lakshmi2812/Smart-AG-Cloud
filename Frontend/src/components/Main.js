//Modifications on this page

import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

//import { createStore, applyMiddleware, compose } from "redux";
//import { Provider } from "react-redux";

//Example. Have to be modified to SmartAgCloud. Leaving a couple for reference
//import RegisterRecruiter from "./recruiterUI/registerRecruiter";
//import ApplicantProfile from "./applicantUI/applicantAccount";
import RegisterAll from "./farmerUI/registerAll";
import Home from "./farmerUI/home";
import Navbar from "./farmerUI/navbar";
//import Login from "./Login";
//import NavbarIM from "./infrastructureUI/navbarIM";
//import SideNavbarFarmer from "./farmerUI/sideNavbarFarmer";
import FarmerDashboard from "./farmerUI/farmerDashboard";
import Footer from "./farmerUI/footer";
import AddASensorFinal from "./farmerUI/addASensorFinal";
import RemoveASensor from "./farmerUI/removeASensor";
import ListOfSensors from "./farmerUI/listOfSensors";
import RequestStatus from "./farmerUI/requestStatus";
import Login from "./Login";
import Farmers from "./Farmers";
import EachFarmer from './EachFarmer';
import FarmerNodes from "./FarmerNodes";
import FarmerSensors from "./FarmerSensors";
import Nodes from "./Nodes";
import EachNode from "./EachNode";
import EachSensor from "./EachSensor";
// import UberMap from './IOT_MAP/UberMap';
import Thermostat from './react-nest-thermostat';
import SoilNutrition from './SoilNutrition';
import PressureSensor from './PressureSensor';
import HumiditySensor from './HumiditySensor';
import FarmerSensorsNew from "./NewFarmerSensors";

//import InfraDashboard from "./infrastructureUI/infraDashboard";
//import ListOfNodes from "./infrastructureUI/listOfNodes";
//import ListOfSensors from "./infrastructureUI/listOfSensors";
//import ListOfUsers from "./infrastructureUI/listOfUsers";
//import promise from "redux-promise";

/*
//__________________________________________INCASE WE NEED REDUX> DONT BOTHER_________
//import thunk from 'redux-thunk';
//const initialState = {};
//const middleware = [thunk];

// //middleware settings
// // To resolve promise to store we use apply
const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const composingMiddlewareAndDevTools = composePlugin(
  applyMiddleware(...middleware, promise)
);
export const store = createStore(
  RootReducer,
  //composePlugin(applyMiddleware(promise))
  composingMiddlewareAndDevTools
);
//___________________________________________________________________________
*/

class Main extends Component {
  render() {
    return (
      // <Provider store={store}>
      <div>
        <Route exact path="/registerAll" component={RegisterAll} />
        <Route exact path="/" component={Home} />
        <Route exact path="/navbar" component={Navbar} />

        <Route
          exact
          path="/farmerDashboard"
          component={withRouter(FarmerDashboard)}
        />
        <Route exact path="/footer" component={Footer} />

        <Route exact path="/listOfSensors" component={ListOfSensors} />
        <Route exact path="/requestStatus" component={RequestStatus} />
        <Route exact path="/addASensorFinal" component={AddASensorFinal} />
        <Route exact path="/removeASensor" component={RemoveASensor} />
        <Route exact path="/login" component={withRouter(Login)} />
        <Route exact path="/iot/:id/farmers" component={withRouter(Farmers)} />
        <Route exact path="/iot/:id/farmers/:farmerID" component={withRouter(EachFarmer)}/>
        {/* EACH SENSOR ROUTES */}
        <Route exact path="/users/1/sensors/2" component={withRouter(Thermostat)}/>
        <Route exact path="/users/1/sensors/3" component={withRouter(SoilNutrition)}/>
        <Route exact path="/users/1/sensors/4" component={withRouter(PressureSensor)}/>
        <Route exact path="/users/1/sensors/1" component={withRouter(HumiditySensor)}/>
        <Route
          exact
          path="/iot/:id/farmers/:farmerId/nodes"
          component={withRouter(FarmerNodes)}
        />
        <Route exact path="/nodes" component={withRouter(Nodes)} />
        <Route
          exact
          path="/sensors/:sensorId"
          component={withRouter(EachSensor)}
        />
        <Route exact path="/nodes/:nodeId" component={withRouter(EachNode)} />

        <Route
          exact
          path="/users/:id/nodes/:nodeId/sensors"
          component={withRouter(FarmerSensors)}
        />
        <Route
          exact
          path="/users/:id/sensorsold"
          component={withRouter(FarmerSensors)}
        />
        <Route
          exact
          path="/users/1/sensors"
          component={withRouter(FarmerSensorsNew)}
        />
      </div>
    );
  }
}

export default Main;

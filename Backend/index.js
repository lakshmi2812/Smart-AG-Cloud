//import express module
var express = require("express");
//create  an express app
var app = express();
//require express middleware body-parser
var bodyParser = require("body-parser");
//require express session
var session = require("express-session");
var cookieParser = require("cookie-parser");

//set the view engine to ejs
app.set("view engine", "ejs");
//set the directory of views
app.set("views", "./views");
//specify the path of static directory
app.use(express.static(__dirname + "/public"));

//use body parser to parse JSON and urlencoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//use cookie parser to parse request headers
app.use(cookieParser());
//use session to store user data between HTTP requests
app.use(
  session({
    secret: "cpe_273_secure_string",
    resave: false,
    saveUninitialized: true
  })
);
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

//Routes ExpressJS

const { users, iot, nodes, sensors } = require("./routeHandler");

var Users = [
  {
    username: "user1",
    password: "pass1",
    email: "user1@smartag",
    userType: "farmer",
    img:
      "https://previews.123rf.com/images/hermandesign2015/hermandesign20151706/hermandesign2015170600062/79452046-cartoon-young-farmer-holding-rake.jpg"
  },
  {
    username: "user2",
    password: "pass2",
    email: "user2@smartag",
    userType: "farmer",
    img:
      "https://fscomps.fotosearch.com/compc/CSP/CSP747/cartoon-farmer-holding-a-rake-clipart__k25862630.jpg"
  },
  {
    username: "user3",
    password: "pass3",
    email: "user3@smartag",
    userType: "farmer",
    img:
      "https://91b6be3bd2294a24b7b5-da4c182123f5956a3d22aa43eb816232.ssl.cf1.rackcdn.com/contentItem-1595389-8065286-7n6suyy1y3mwo-or.png"
  },
  {
    username: "user7",
    password: "pass7",
    email: "user7@smartag.com",
    userType: "iot_support",
    img:
      "https://previews.123rf.com/images/lawangdesign/lawangdesign1608/lawangdesign160800009/63132421-cartoon-young-farmer-holding-rake.jpg"
  },
  {
    username: "user10",
    password: "pass10",
    email: "user10@smartag.com",
    userType: "infrastructure_manager",
    img: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24560947.jpg"
  },
  {
    username: "admin",
    password: "admin",
    email: "user10@smartag.com",
    userType: "infrastructure_manager",
    img: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24560947.jpg"
  }
];
/*
var sensors = [
  {
    sensorID: "1",
    type: "humidity",
    location: "Area1",
    lat: "37.3229",
    lng: "-122.0321"
  },
  {
    sensorID: "2",
    type: "temperature",
    location: "Area2",
    lat: "37.5482",
    lng: "-121.9885"
  },
  {
    sensorID: "3",
    type: "soil moisture",
    location: "Area3",
    lat: "37.4323",
    lng: "-121.8995"
  }
];
*/

var Sensors = [
  {
    sensorType: "",
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
    sensor_name: "sensor1"
  },
  {
    sensorType: "temperature",
    status: "on",
    x_coordinate: 37.5482,
    y_coordinate: -121.9885,
    data: {
      type: "F",
      value: 12.23
    },
    farmerID: 1,
    nodeID: 1,
    ID: 2,
    sensor_desc: "sensor2 desc",
    sensor_name: "sensor2"
  },
  {
    sensorType: "soil nutrition",
    status: "on",
    x_coordinate: 37.4323,
    y_coordinate: -121.8995,
    data: {
      type: "pH",
      value: 12.23
    },
    farmerID: 1,
    nodeID: 1,
    ID: 3,
    sensor_desc: "sensor3 desc",
    sensor_name: "sensor3"
  }
];

var Requests = [
  {
    requestType: "Add",
    sensorType: "Humidity",
    sensorLocation: "Area1"
  },
  {
    requestType: "Remove",
    sensorType: "Humidity",
    sensorLocation: "Area3"
  },
  {
    requestType: "Add",
    sensorType: "Humidity",
    sensorLocation: "Area2"
  }
];

app.post("/addASensorFinal", function(req, res) {
  console.log("add a sensor");
  console.log(req.body);
  var newSensor = {
    sensorType: req.body.sensorType,
    x_coordinate: req.body.sensorXcoordinate,
    y_coordinate: req.body.sensorYcoordinate
  };
  console.log(newSensor);
  Sensors.push(newSensor);
  // res.redirect("/farmerDashboard");
  console.log(Sensors);
  var resData = {
    status: 200
  };

  console.log("Sensor addition Successful!!!!");
  res.end(JSON.stringify(resData));
});

app.post("/registerAll", function(req, res) {
  console.log(req.body);
  var newUser = {
    username: req.body.username,
    password: req.body.password,
    Fname: req.body.Fname,
    Lname: req.body.Lname,
    email: req.body.email,
    type: req.body.type,
    city: req.body.state,
    state: req.body.state,
    country: req.body.country,
    pNo: req.body.pNo
  };
  Users.push(newUser);
  // res.redirect("/farmerDashboard");
  console.log(Users);
  var resData = {
    status: 200
  };
  res.end(JSON.stringify(resData));
  console.log("Farmer Added Successfully!!!!");
});

app.get("/listOfSensors", function(req, res) {
  //console.log("Session data : ", req.session);
  console.log("list of sensors");
  console.log(Sensors);
  //console.log(JSON.stringify(sensors));
  //console.log(JSON.stringify(sensors));
  res.end(JSON.stringify(Sensors));
});

app.get("/listOfSensorsMap", function(req, res) {
  console.log("map list of sensors");
  //console.log("Session data : ", req.session);
  var sensorMap = [];
  var j = Sensors.length;
  for (var i = 0; i < j; i++) {
    var coordinates = {
      lat: Number(Sensors[i].x_coordinate),
      lng: Number(Sensors[i].y_coordinate)
    };
    sensorMap.push(coordinates);
    console.log(coordinates);
  }
  console.log(sensorMap);
  res.end(JSON.stringify(sensorMap));
});

app.post("/removeASensor", function(req, res) {
  console.log("Inside Delete Request");
  console.log(req.body);
  var index = Sensors.map(function(sensor) {
    console.log(sensor.x_coordinate);
    return sensor.x_coordinate;
  }).indexOf(req.body.sensorXcoordinate);

  if (index === -1) {
    console.log("Sensor Not Found");
  } else {
    Sensors.splice(index, 1);
    console.log(
      "Sensor with latitude: " +
        req.body.sensorXcoordinate +
        " and longitude: " +
        req.body.sensorYcoordinate +
        " was removed successfully"
    );
    var resData = {
      status: 200
    };
    res.end(JSON.stringify(resData));
    console.log("Farmer deleted Successfully!!!!");
  }
});

//Routes ExpressJS

//const { users, iot, nodes, sensors } = require("./routeHandler");

//Middleware to use routes
app.use("/users", users);
app.use("/iot", iot);
app.use("/nodes", nodes);
app.use("/sensors", sensors);

app.listen(3001);
console.log("Server Listening on port 3001");




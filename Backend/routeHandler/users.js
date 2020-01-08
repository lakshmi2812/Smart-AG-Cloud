// //Here we state the path to where all the routes are. The routes will be in linkedINController
// //CHeck the sample project to understand and compare
// //Has to be modified. GIven are smaples.

// var express = require('express');
// var router = express.Router();
// var bcrypt = require('bcrypt');
// const saltRounds = 10;
// let mongoose = require('mongoose');
// //load all Models
// var User = require("../models/user");
// //require User model
// var User = mongoose.model("User");

// var Node = require("../models/node");
// //require User model
// var Node = mongoose.model("Node");

// var Sensor = require("../models/sensor");
// //require User model
// var Sensor = mongoose.model("Sensor");

// router.get('/signup', (req, res)=>{
// 	console.log('*****Inside POST for Signup******');
//     console.log('name',request.body.username);
//     console.log('email',request.body.email);
//     console.log('password',request.body.password);
//     let uname = request.body.name;
//     let uemail = request.body.email;
//     let upassword = request.body.password;
//     let id;
//     const user = new User({username:uname, password:upassword, email:uemail, userType:"farmer"});
//     user.save()
//     .then((res)=>{
//         console.log('Farmer saved successfully',res);
//         return response.status(200).json({message:"success"});
//     })
//     .catch((err)=>{
//         console.log('Error creating faculty user:',err);
//     })
// 	res.send("Hello!");
// })

// router.post('/login', (req, res)=>{
// 	console.log('Inside login POST');
//     console.log('Request Body: ', req.body);

//     //Kafka request
//     User.findOne({
//         'username': req.body.username
//     }, (err, user) => {
//         console.log("find one user done!")
//         if (err) {
//             console.log("Unable to fetch user details.", err);
//             // callback(err, null);
//         }
//         else {
//             if(user){
//                 console.log("User details ", user);
//                 //if (!bcrypt.compareSync(msg.password, user.password)) {
//                 if (req.body.password !== user.password) {
//                     console.log('Invalid Credentials!');
//                     res.status(404).json({message:'Invalid Credentials!'});
//                     // callback(null, null);
//                 }
//                 else {
//                     req.session.user = user;
//                     //const token = jwt.sign(user.toJSON(), config.secret, { expiresIn: 86400 * 7 });
//                     //console.log('User from login:', user, 'Token from login: ', token);
//                     let userData = {userid:user._id, user_type: user.userType};
//                     console.log('User Data:',userData);
//                     res.status(200).json(JSON.stringify(userData));
//                 }
//             }
//             else{
//                 res.writeHead(401,
//                     {
//                         'Content-type': 'text/plain'
//                     })
//                     console.log('****Invalid Credentials****!');
//                     res.end('Invalid Credentials!');
//             }
//         }
// })

// });

// router.get('/:id/', (req, res)=>{
//     let farmerID = Number(req.params.id);
//     User.find({ID: farmerID})
//     .then((result)=>{
//         console.log("Result in fetch Farmer Nodes:", result);
//         res.status(200).json({eachFarmer: result});
//     })
// })

// router.get('/:id/nodes', (req, res)=>{
//     let farmerID = Number(req.params.id);
//     Node.find({farmerID: req.params.id})
//     .then((result)=>{
//         console.log("Result in fetch Farmer Nodes:", result);
//         res.status(200).json({farmer_nodes: result});
//     })
// })

// router.get('/:id/nodes/:nodeId', (req, res)=>{
//     let farmerID = Number(req.params.id);
//     Node.find({farmerID: req.params.id})
//     .then((result)=>{
//         // console.log("Result in fetch Farmer Nodes:", result);
//         // res.status(200).json({farmer_nodes: result});
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

// //POST a node for the farmer
// router.post('/:id/nodes', async (req, res)=>{
//     let farmerID = Number(req.params.id);
//     let node_count = await Node.count();
//     console.log('Node count:->', node_count);
//     let new_node = await new Node({
//         status: "on",
//         x_coordinate: req.body.x_coordinate,
//         y_coordinate: req.body.y_coordinate,
//         farmerID: farmerID,
//         humidity_sensor_vacancy: true,
//         temperature_sensor_vacancy: true,
//         moisture_sensor_vacancy: true,
//         soil_nutrition_vacancy: true,
//         ID: node_count+1
//     });
//     new_node.save()
//     .then((result)=>{
//         console.log("Successfully added node to teh farmer's farm:", result);
//         res.status(200).json({new_farmer_node: result});
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

// //Add a sensor for the farmer for a particular node
// router.post('/:id/sensors', async (req, res)=>{
//     try{
//         let farmerID = Number(req.params.id);
//         //let nodeId = req.params.nodeId;
//         let sensorType = req.body.sensorType;
//         //let status = req.body.status;
//         let x_coordinate = req.body.x_coordinate;
//         let y_coordinate = req.body.y_coordinate;
//         let sensor_count = await Sensor.count();
//         console.log('Sensor count:->', sensor_count);
//         if(sensorType === "Humidity"){
//             let vacant_nodes = await Node.find({humidity_sensor_vacancy: true});
//             console.log('vacant nodes: -> ', vacant_nodes);
//             if(vacant_nodes.length !== 0){
//                 console.log('some vacant nodes exist');
//                 let new_sensor = await new Sensor({
//                     sensorType: sensorType,
//                     status: "on",
//                     x_coordinate: x_coordinate,
//                     y_coordinate: y_coordinate,
//                     farmerID: farmerID,
//                     nodeID: vacant_nodes[0].ID,
//                     ID: sensor_count+1
//                 })
//                 await new_sensor.save();
//                 vacant_nodes[0].humidity_sensor_vacancy = false;
//                 await vacant_nodes[0].save();
//                 console.log('Humidity sensor vacancies: ->',vacant_nodes[0]);
//                 res.status(200).json({"sensor_node":vacant_nodes[0], "new_sensor":new_sensor})
//             }else{
//                 console.log("***No nodes with vacancy of this sensor type!***");
//                 let node_count = await Node.count();
//                 let new_node = await new Node({
//                     status: "on",
//                     x_coordinate: req.body.x_coordinate,
//                     y_coordinate: req.body.y_coordinate,
//                     farmerID: farmerID,
//                     humidity_sensor_vacancy: true,
//                     temperature_sensor_vacancy: true,
//                     moisture_sensor_vacancy: true,
//                     soil_nutrition_vacancy: true,
//                     ID: node_count+1
//                 });
//                 await new_node.save();
//                 let new_sensor = await new Sensor({
//                     sensorType: sensorType,
//                     status: "on",
//                     x_coordinate: x_coordinate,
//                     y_coordinate: y_coordinate,
//                     farmerID: farmerID,
//                     nodeID: new_node.ID,
//                     ID: sensor_count+1
//                 })
//                 new_node.humidity_sensor_vacancy = false;
//                 await new_node.save();
//                 await new_sensor.save();
//                 console.log('Newly created node: ->',new_node);
//                 res.status(200).json({"sensor_node":new_node, "new_sensor":new_sensor})
//             }
//         }
//     }catch(err){
//         console.log("Error: ",err);
//         res.status(400).json({"message":"Failure!"});
//     }
//     // let new_sensor = await new Sensor({
//     //     sensorType: sensorType,
//     //     status: status,
//     //     x_coordinate: x_coordinate,
//     //     y_coordinate: y_coordinate,
//     //     farmerID: farmerID,
//     //     nodeID: req.params.nodeId,
//     //     ID: sensor_count+1
//     // });
//     // new_sensor.save();
//     // .then((result)=>{
//     //     console.log("Successfully added node to teh farmer's farm:", result);
//     //     res.status(200).json({new_farmer_node: result});
//     // })
//     // .catch((err)=>{
//     //     console.log(err);
//     // })
// })

// //GET all sensors for a particular node for the farmer
// router.get('/:id/nodes/:nodeId/sensors', (req, res)=>{
//     let farmerID = Number(req.params.id);
//     Sensor.find({ $and: [ { farmerID: { $eq: 1 } }, { nodeID: { $eq: 1 } } ] })
//     .then((result)=>{
//          console.log("Result in fetch Farmer Sensors:", result);
//          res.status(200).json({farmer_sensors: result});
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

// module.exports = router;

var express = require("express");
var router = express.Router();

var express = require("express");
var router = express.Router();
var User = require("./arrays/User");
var Node = require("./arrays/Node");
var Sensor = require("./arrays/Sensor");

router.get("/signup", (req, res) => {
  console.log("*****Inside POST for Signup******");
  console.log("name", request.body.username);
  console.log("email", request.body.email);
  console.log("password", request.body.password);
  let uname = request.body.name;
  let uemail = request.body.email;
  let upassword = request.body.password;
  let id;
  const user = {
    username: uname,
    password: upassword,
    email: uemail,
    userType: "farmer"
  };
  // user.save()
  // .then((res)=>{
  //     console.log('Farmer saved successfully',res);
  //     return response.status(200).json({message:"success"});
  // })
  // .catch((err)=>{
  //     console.log('Error creating faculty user:',err);
  // })
  User.push(user);
  res.send("Hello!");
});

router.post("/login", (req, res) => {
  console.log("Inside login POST");
  console.log("Request Body: ", req.body);
  let find = "";
  let type = "";
  let userData;

  for (let i = 0; i < User.length; i++) {
    if (req.body.username === User[i].username) {
      userData = User[i];
      find = "success";
      if (User[i].userType === "iot_support") {
        type = "iot";
      }
    }
  }
  if (find === "success") {
    res.status(200).json(JSON.stringify(userData));
  } else {
    res.status(400).json({ message: "Invalid Credentials" });
  }

  //Kafka request
  //     User.findOne({
  //         'username': req.body.username
  //     }, (err, user) => {
  //         console.log("find one user done!")
  //         if (err) {
  //             console.log("Unable to fetch user details.", err);
  //             // callback(err, null);
  //         }
  //         else {
  //             if(user){
  //                 console.log("User details ", user);
  //                 //if (!bcrypt.compareSync(msg.password, user.password)) {
  //                 if (req.body.password !== user.password) {
  //                     console.log('Invalid Credentials!');
  //                     res.status(404).json({message:'Invalid Credentials!'});
  //                     // callback(null, null);
  //                 }
  //                 else {
  //                     req.session.user = user;
  //                     //const token = jwt.sign(user.toJSON(), config.secret, { expiresIn: 86400 * 7 });
  //                     //console.log('User from login:', user, 'Token from login: ', token);
  //                     let userData = {userid:user._id, user_type: user.userType};
  //                     console.log('User Data:',userData);
  //                     res.status(200).json(JSON.stringify(userData));
  //                 }
  //             }
  //             else{
  //                 res.writeHead(401,
  //                     {
  //                         'Content-type': 'text/plain'
  //                     })
  //                     console.log('****Invalid Credentials****!');
  //                     res.end('Invalid Credentials!');
  //             }
  //         }
  // })
});

router.get("/:id/nodes", (req, res) => {
  let farmerID = Number(req.params.id);
  let farmerNodes = [];
  for (let i = 0; i < Node.length; i++) {
    if (farmerID === Node[i].farmerID) {
      farmerNodes.push(Node[i]);
    }
  }
  res.status(200).json({ message: "success", farmer_nodes: farmerNodes });
});

router.get("/:id/nodes/:nodeId/sensors", (req, res) => {
  let farmerID = Number(req.params.id);
  let farmerSensors = [];
  for (let i = 0; i < Sensor.length; i++) {
    if (farmerID === Sensor[i].farmerID) {
      farmerSensors.push(Sensor[i]);
    }
  }
  res.status(200).json({ message: "success", farmer_sensors: farmerSensors });
});

module.exports = router;

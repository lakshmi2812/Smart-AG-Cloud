//Here we state the path to where all the routes are. The routes will be in linkedINController
//CHeck the sample project to understand and compare
//Has to be modified. GIven are smaples.

// var express = require('express');
// var router = express.Router();
// var bcrypt = require('bcrypt');
// const saltRounds = 10;
// let mongoose = require('mongoose');
// //load all Models
// var User = require("../models/user");
// //require User model
// var User = mongoose.model("User");

// router.get("/:id/farmers", (req, res)=>{
//     console.log("******* INSIDE GET Farmers Route! ***********");
//     User.find( { userType: { $all: ["farmer"] } } )
//     .then((result)=>{
//         console.log('All farmers:-->', result);
//         res.status(200).json({message:"success!", allFarmers: result});
//     })
// })
// module.exports = router;

var express = require("express");
var router = express.Router();

var User = require("./arrays/User");

//GET ALL FARMERS
router.get("/:id/farmers", (req, res) => {
  console.log("******* INSIDE GET All Farmers Route! ***********");
  let allUsers = User;
  res.status(200).json({ message: "success!", allFarmers: allUsers });
});

//GET each Farmer
router.get('/:id/farmers/:farmerID', (req, res)=>{
    console.log("****** INSIDE GET a Farmer route ***********");
    let farmerID = Number(req.params.farmerID);
    let farmer;
    for(let i = 0; i < User.length; i++){
        if(farmerID === User[i].ID){
            console.log("Farmer ID: ->",User[i]);
            farmer = User[i];
        }
    }  
    res.status(200).json({message:"success", farmer:farmer});
});
module.exports = router;


///**********************************************************************************/
///**********************************************************************************/


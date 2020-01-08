//Has to be deleted. Just to give an example for how to design a mongoose schema
//UserID, Username(String), FirstName(String), LastName(String), email(String), password(String hashed), UserType(String), City(String), State(String), Country(String), timestamp(Date)
var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

var UserSchema = new Schema({
  username: {type: String, unique: true, required:true},
  password: {type: String},
  passwordHash: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true
  },
  userType: {
    type: String,
    default: "farmer/iot_support/infrastructure_manager"
  },
  firstName: {
    type: String,
    default: "firstname"
  },
  lastName: {
    type: String,
    default: "lastname"
  },
  city: {
    type: String,
    default: "city"
  },
  state: {
    type: String,
    default: "state"
  },
  county: {
    type: String,
    default: "county"
  },
  img: {
    type: String,
    default: "image"
  },
  ID: {type: Number, unique: true, required:true}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

/*
  db.users.insert({username: "mickey",
  password: "mickey",
  passwordHash: { type: String, required: true },
  email: "mickey@smartag",
  userType: "farmer",
  firstName: "mickey",
  lastName: "mouse",
  city: "citynew",
  state: "statenew",
  county: "countynew",
  img: "https://image.shutterstock.com/image-photo/indian-farmer-holding-crop-plant-260nw-1116673256.jpg",
  ID: 100
  });
*/

//Connecting to mongodb

var mongoose = require('mongoose');
//var env = process.env.NODE_ENV || "development";
var env = "development";
var config = require('./configDB/mongo')[env];

module.exports = () => {
    //var envUrl = proccess.env[config.use_env_variable];
    var localUrl = `mongodb://${config.host}/${config.database}`;
    // var localUrl = `mongodb://admin:admin@ec2-13-52-178-227.us-west-1.compute.amazonaws.com/smartag_development`;
    //var mongoUrl = envUrl ? envUrl : localUrl;
    var mongoUrl = localUrl;
    return mongoose.connect(mongoUrl);
};

// db.createUser({
//     user: 'admin',
//     pwd: 'admin',
//     roles: [{ role: 'readWrite', db:'smartag_development'}]
// })

//mongodb://admin:admin@13.52.178.227/smartag_development
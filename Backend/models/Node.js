//NodeID, Status(String), x_coordinate(Number), y_coordinate(Number), farmerID, sensor1_vacancy(Boolean),sensor2_vacancy(Boolean),sensor3_vacancy(Boolean),sensor4_vacancy(Boolean)
var mongoose = require("mongoose");

var Node = mongoose.model("Node", {
    status: {type: String},
    x_coordinate: {type: String},
    y_coordinate: {type: String},
    farmerID: {type: Number},
    //farmerID: {type: Schema.Types.ObjectId},
    humidity_sensor_vacancy: {type: Boolean},
    temperature_sensor_vacancy: {type: Boolean},
    moisture_sensor_vacancy: {type: Boolean},
    soil_nutrition_vacancy: {type: Boolean},
    ID: {type: Number, unique:true, required:true}
});

module.exports = Node;


/*

[
{
    status: "on",
    x_coordinate: 54,
    y_coordinate: 18,
    farmerID: 1,
    humidity_sensor_vacancy: false,
    soil_nutrition_sensor_vacancy: false,
    temperature_sensor_vacancy: true,
    moisture_sensor_vacancy: false,
    ID: 1
},
{
    status: "on",
    x_coordinate: 78,
    y_coordinate: 38,
    farmerID: 1,
    sensor1_vacancy: false,
    sensor2_vacancy: false,
    sensor3_vacancy: false,
    sensor4_vacancy: false,
    ID: 2
},
{
    status: "on",
    x_coordinate: 232,
    y_coordinate: 93,
    farmerID: 2,
    sensor1_vacancy: false,
    sensor2_vacancy: true,
    sensor3_vacancy: true,
    sensor4_vacancy: false,
    ID: 3
},
{
    status: "on",
    x_coordinate: 92,
    y_coordinate: 20,
    farmerID: 3,
    sensor1_vacancy: true,
    sensor2_vacancy: false,
    sensor3_vacancy: true,
    sensor4_vacancy: false,
    ID: 4
},
{
    status: "on",
    x_coordinate: 824,
    y_coordinate: 82,
    farmerID: 2,
    sensor1_vacancy: true,
    sensor2_vacancy: true,
    sensor3_vacancy: true,
    sensor4_vacancy: false,
    ID: 5
},
{
    status: "on",
    x_coordinate: 28,
    y_coordinate: 91,
    farmerID: 1,
    sensor1_vacancy: false,
    sensor2_vacancy: false,
    sensor3_vacancy: false,
    sensor4_vacancy: false,
    ID: 6
},
{
    status: "on",
    x_coordinate: 493,
    y_coordinate: 187,
    farmerID: 3,
    sensor1_vacancy: false,
    sensor2_vacancy: false,
    sensor3_vacancy: true,
    sensor4_vacancy: true,
    ID: 7
},
{
    status: "on",
    x_coordinate: 29,
    y_coordinate: 84,
    farmerID: 3,
    sensor1_vacancy: false,
    sensor2_vacancy: false,
    sensor3_vacancy: false,
    sensor4_vacancy: false,
    ID: 8
},
{
    status: "on",
    x_coordinate: 74,
    y_coordinate: 223,
    farmerID: 2,
    sensor1_vacancy: true,
    sensor2_vacancy: false,
    sensor3_vacancy: true,
    sensor4_vacancy: true,
    ID: 9
},
{
    status: "on",
    x_coordinate: 542,
    y_coordinate: 180,
    farmerID: 2,
    sensor1_vacancy: true,
    sensor2_vacancy: false,
    sensor3_vacancy: true,
    sensor4_vacancy: true,
    ID: 10
}
]


*/
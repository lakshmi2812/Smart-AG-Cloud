var Sensors = [
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
    sensor_name: "sensor1"
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
    sensor_name: "sensor2"
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
    sensor_name: "sensor3"
  },
  {
    sensorType: "Moisture",
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
    sensor_name: "sensor4"
  }
];

module.exports = Sensors;

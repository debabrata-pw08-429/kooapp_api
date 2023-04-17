const mongoose = require("mongoose");
require("dotenv").config();

const CONNECT = async () => {
  await mongoose.connect("mongodb://localhost:27017/Koodata");
};

module.exports = CONNECT;

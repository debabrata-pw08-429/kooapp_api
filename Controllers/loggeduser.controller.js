require("dotenv").config();
const loggeduserModel = require("../Models/loggeduser.model");


async function getLoggeduser() {
  let x = await loggeduserModel.find();
  return x;
}

module.exports = { getLoggeduser };

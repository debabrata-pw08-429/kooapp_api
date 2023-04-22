const express = require("express");
const loggeduserRouter = express.Router();
const {  getLoggeduser } = require("../Controllers/loggeduser.controller");

// /loggeduser --> fetches the details of logged user
loggeduserRouter.get("/loggedUser", async (req, res) => {
  try {
    let user = await getLoggeduser();

    res.send({
      data: user,
    });
  } catch (error) {
    res.status(500).send("Error", error.message);
  }
});



module.exports = loggeduserRouter;

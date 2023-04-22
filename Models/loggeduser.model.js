const mongoose = require("mongoose");

const loggeduserSchema = new mongoose.Schema({
  sub: { type: Number},
  name: { type: String},
  given_name: { type: String},
  family_name: { type: String},
  picture: { type: String},
  email: { type: String},
  email_verified: { type: Boolean},
  locale: { type: String},
  profileImg: { type: [String], default: new Array(10)},
});

const loggeduserModel = mongoose.model("user", loggeduserSchema);

module.exports = loggeduserModel;

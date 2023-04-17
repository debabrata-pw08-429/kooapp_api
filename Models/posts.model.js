const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  device: { type: String, required: true },
  user: {
    name: String,
    id: String,
  },
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;

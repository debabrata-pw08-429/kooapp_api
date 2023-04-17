require("dotenv").config();
const postModel = require("../Models/posts.model");

async function addPost(data) {
  let x = await postModel.create(data);
  return x;
}

async function getAllPosts(_id) {
  let x = await postModel.find({ "user.id": _id });
  return x;
}

module.exports = { addPost, getAllPosts };

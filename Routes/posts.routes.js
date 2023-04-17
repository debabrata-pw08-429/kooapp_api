const express = require("express");
const postRouter = express.Router();
const AuthMiddleware = require("../Middlewares/AuthMiddleware");
const { addPost, getAllPosts } = require("../Controllers/posts.controller");

// /posts ==> This will show the posts of logged in users.
postRouter.get("/posts", AuthMiddleware, async (req, res) => {
  try {
    let { _id } = req.user;
    let allPosts = await getAllPosts(_id);

    res.send({
      data: allPosts,
    });
  } catch (error) {
    res.status(500).send("Error", error.message);
  }
});

postRouter.post("/posts", AuthMiddleware, async (req, res) => {
  try {
    let { name, _id } = req.user;
    let userObj = {
      name,
      id: _id,
    };

    let body = req.body;

    let postObj = {
      ...body,
      user: userObj,
    };

    let Added = await addPost(postObj);
    res.send(Added);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// /posts/update ==> The logged in user can update his/her posts.

// /posts/delete ==> The logged in user can delete his/her posts.

module.exports = postRouter;

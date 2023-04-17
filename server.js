// IMPORTs_
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const CONNECT = require("./Configs/connection");
const userRouter = require("./Routes/users.routes");
const postRouter = require("./Routes/posts.routes");
const app = express();

// USE_
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(userRouter);
app.use(postRouter);

// LOGIC_
app.get("/", (req, res) => {
  res.send("Server working correctly!");
});

// CONNECT & LISTEN_
const PORT = 8080;
CONNECT().then(() => {
  app.listen(PORT, () => {
    console.log("Server started at :", PORT);
  });
});

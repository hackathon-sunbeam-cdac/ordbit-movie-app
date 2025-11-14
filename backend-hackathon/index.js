const express = require("express");
const cors = require("cors");

const config = require("./utils/config");
const authorization = require("./routes/authorization");
const userRouter = require("./routes/user");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.json());

app.use(authorization);

app.get("/test", (req, res) => {
  console.log("on console");
  res.send("Hello");
});

app.use("/user", userRouter);

app.listen(config.port, () => {
  console.log(`server started at http://localhost:${config.port}`);
});

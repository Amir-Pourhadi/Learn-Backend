const express = require("express");
const connectDB = require("../config/db");
const configure = require("./config");

const app = express();

// Connect MangoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello! Server is running! Happy Hacking :)");
});

app.listen(configure.port, () => {
  console.info(`Server is running on port ${configure.port}`);
});

const express = require("express");
const { port } = require("./config");
const connectDB = require("../config/db");

const app = express();
// Connect MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

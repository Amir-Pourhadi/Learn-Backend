const express = require("express");
const { port } = require("./config");
const connectDB = require("../config/db");

const app = express();
// Connect MongoDB
connectDB();

// Use parser middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// define Routes
app.use("/api/users", require("../routes/api/users"));
app.use("/api/auth", require("../routes/api/auth"));
app.use("/api/profile", require("../routes/api/profile"));
app.use("/api/cards", require("../routes/api/cards"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

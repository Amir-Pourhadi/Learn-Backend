const express = require("express");
const connectDB = require("../config/db");
const configure = require("./config");

const app = express();

// Connect MongoDB
connectDB();

// Use parser middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello! Server is running! Happy Hacking :)");
});

// Define Routes
app.use("/api/users", require("../routes/api/users"));
app.use("/api/auth", require("../routes/api/auth"));
app.use("/api/profile", require("../routes/api/profile"));
app.use("/api/cards", require("../routes/api/cards"));

app.listen(configure.port, () => {
  console.info(`Server is running on port ${configure.port}`);
});

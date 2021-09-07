const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

// mongoose.connect(db);
// But we want to use async and await to make it cleaner and prevent getting errors in an asynchronous call

const connectDB = async () => {
  try {
    await mongoose.connect(db);
  } catch (error) {
    console.error(error.message);

    // Exit process with failure
    process.exit(0);
  }
};

module.exports = connectDB;

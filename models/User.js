const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  avatar: { type: String },
  date: { type: date, default: Date.now },
});

const User = model(User, UserSchema);

module.exports = User;

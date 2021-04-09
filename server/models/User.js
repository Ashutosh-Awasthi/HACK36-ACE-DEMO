const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  status: {
    type: Number
  }
});

module.exports = User = mongoose.model("User", UserSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  timestamps: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);

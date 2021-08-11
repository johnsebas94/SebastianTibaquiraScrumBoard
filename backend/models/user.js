const mongoose = require("mongoose"); //Create Schema
const jwt = require("jsonwebtoken"); //To encrypt
const moment = require("moment");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  roleId: { type: mongoose.Schema.ObjectId, ref: "role" },
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});
//Create schema to encrypt information
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      iat: moment().unix(), //To make more secure the aplication
    },
    process.env.SECRET_KEY_JWT
  );
};
const user = mongoose.model("user", userSchema); // Save collection data to send MongoDB
module.exports = user; //Export module

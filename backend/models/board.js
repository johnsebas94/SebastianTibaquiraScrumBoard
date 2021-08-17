const mongoose = require("mongoose");

//Create schema
const boardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  name: String,
  description: String,
  taskStatus: String,
  imageUrl: String,
  date: {type: Date, default: Date.now},
});

const board = mongoose.model("board", boardSchema);
module.exports = board; //Export module

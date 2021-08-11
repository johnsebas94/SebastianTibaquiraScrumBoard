const mongoose = require("mongoose");

//Create schema
const boarSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  name: String,
  description: String,
  taskStatus: String,
  date: { type: Date, defaut: Date.now },
});

const board = mongoose.model("board", boardSchema);
module.exports = board; //Export module

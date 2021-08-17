const express = require("express");
const router = express.Router();
const BoardController = require("../controllers/boardController");

router.post("/saveTask", BoardController.saveTask);

module.exports = router;

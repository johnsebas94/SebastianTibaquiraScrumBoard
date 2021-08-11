const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//http://localhost:3002/api/user/registerUser
router.post("/registerUser", userController.registerUser);
//http://localhost:3002/api/user/listUser
router.get("/listUser/:name?", userController.listUser);

module.exports = router;

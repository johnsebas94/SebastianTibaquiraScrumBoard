const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

//http://localhost:3002/api/user/registerUser
router.post("/registerUser", userController.registerUser);
//http://localhost:3002/api/user/listUser
router.get("/listUser/:name?", Auth, ValidateUser, userController.listUser);

module.exports = router;

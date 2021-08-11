const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/roleController");

//http://localhost:3002/api/role/registerRole
router.post("/registerRole", RoleController.registerRole);
//http://localhost:3002/api/role/listRole
router.get("/listRole", RoleController.listRole);

module.exports = router;

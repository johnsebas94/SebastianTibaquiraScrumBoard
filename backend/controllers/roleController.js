const { request } = require("express");
const Role = require("../models/role");

//Role registry
const registerRole = async (req, res) => {
  if (!req.body.name || !req.body.description)
    //Validate data
    return res.status(401).send("Failed: No complete data");

  const existingRole = await Role.findOne({ name: req.body.name });
  if (existingRole)
    return res
      .status(401)
      .send("Process failed: role has already been created");

  // Create JSON to send role models
  const role = new Role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  //Save in MongodDB
  const result = await role.save();
  if (!result) return res.status(401).send("There was a failed register role");
  return res.status(200).send({ role });
};

//Check List
const listRole = async (req, res) => {
  const role = await Role.find();
  if (!role || role.length === 0) return res.status(401).send("No role");
  return res.status(200).send({ role });
};

//Export module
module.exports = { registerRole, listRole };

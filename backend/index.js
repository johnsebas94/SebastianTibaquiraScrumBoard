//Call Modules
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db_sebastian");
const Role = require("./routes/roleRoutes");
require("dotenv").config();

//Create aplication
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", Role);

//Listen 3002 PORT
app.listen(process.env.PORT, () =>
  console.log("Backend server is running OK on port: ", process.env.PORT)
);

//Connect with DataBase
dbConnection();

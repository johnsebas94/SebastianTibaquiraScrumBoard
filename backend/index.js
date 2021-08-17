//Call Modules
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db_sebastian");
const Role = require("./routes/roleRoutes");
const User = require("./routes/userRoutes");
const Auth = require("./routes/authRoutes");
const Board = require("./routes/boardRoutes");
require("dotenv").config();

//Create aplication
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", Role);
app.use("/api/user", User);
app.use("/api/auth", Auth);
app.use("/api/board", Board);

//Listen 3002 PORT
app.listen(process.env.PORT, () =>
  console.log("Backend server is running OK on port: ", process.env.PORT)
);

//Connect with DataBase
dbConnection();

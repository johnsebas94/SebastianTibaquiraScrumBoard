// Call mongoose module
const mongoose = require("mongoose");

//Create DataBase arrow function
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.SEBASTIAN_DB_CONNECTION, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: It´s OK");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    throw new Error("Error connecting to MongoDB, something is wrong");
  }
};

//Generate DataBase module
module.exports = { dbConnection };

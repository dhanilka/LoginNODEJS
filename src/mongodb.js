const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginDb")
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Databse connection Failed !!!");
  });

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("Users", LoginSchema);
module.exports = collection;

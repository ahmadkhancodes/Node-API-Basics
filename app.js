const express = require("express");
const morgan = require("morgan");
const App = express();
App.listen(32303);
const postRoutes = require("./routes/post");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

//MongoDB Connection
const mongoose = require("mongoose");
const DB =
  "mongodb+srv://ahmadkhan:ahmadkhan@nodeapi.kyszv.mongodb.net/NodeDB?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => console.log("Database Connected Succesfully !"))
  .catch((err) => console.log(err));

// Application;
App.use(morgan("dev"));
App.use(bodyParser.json());
App.use(expressValidator());
App.use("/", postRoutes);

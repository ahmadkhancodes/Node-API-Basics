const mongoose = require("mongoose");
const DB =
  "mongodb+srv://ahmadkhan:ahmadkhan@nodeapi.kyszv.mongodb.net/NodeDB?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => console.log("Database Connected Succesfully !"))
  .catch((err) => console.log(err));

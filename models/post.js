const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 200,
  },
});

module.exports = mongoose.model("Post", postSchema);

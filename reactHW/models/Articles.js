var mongoose = require("mongoose");

// POST - title, content
var articleSchema = new mongoose.Schema({
   title: String,
   date: String,
   url: String
});
module.exports = mongoose.model("Article", postSchema);
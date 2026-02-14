const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
name: String,
icon: String,		//icon image or fontawesome class
popular: { type: Boolean, default: false }
});
module.exports = mongoose.model("category", categorySchema);
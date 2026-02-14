const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
name: String,
email: String,
password: String,
businessName: String,
approved: { type: Boolean, default: "false" }
});

module.exports = mongoose.model("Provider", providerSchema);
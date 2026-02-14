const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  businessName: String,
  ownerName: String,
  category: String,
  city: String,
  phone: String,
  description: String,

  addedBy: {
    type: String,
    enum: ["admin", "provider"]
  },

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Listing", listingSchema);

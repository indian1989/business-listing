const express = require("express");
const router = express.Router();
const Listing = require("../models/Listing");

// PROVIDER ADD BUSINESS
router.post("/provider/add-business", async (req, res) => {
  try {
    const business = new Listing({
      businessName: req.body.businessName,
      ownerName: req.body.ownerName,
      category: req.body.category,
      city: req.body.city,
      phone: req.body.phone,
      description: req.body.description,
      addedBy: "provider",
      status: "pending"   // ⏳ admin approval required
    });

    await business.save();

    res.json({
      message: "✔ Business submitted for admin approval",
      business
    });

  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
});

module.exports = router;

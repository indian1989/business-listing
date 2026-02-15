
const express = require("express");
const router = express.Router();
const Listing = require("../models/Listing");

// ADMIN ADD BUSINESS
router.post("/admin/add-business", async (req, res) => {
  try {
    const business = new Listing({
      businessName: req.body.businessName,
      ownerName: req.body.ownerName,
      category: req.body.category,
      city: req.body.city,
      phone: req.body.phone,
      description: req.body.description,
      addedBy: "admin",
      status: "approved"   // ✅ direct approved
    });

    await business.save();

    res.json({
      message: "✔ Business added & approved by Admin",
      business
    });

  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
});

module.exports = router;

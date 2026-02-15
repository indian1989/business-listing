const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

// ADMIN LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Admin check
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "✖ Admin not found" });
    }

    // 2. Password match
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "✖ Invalid password" });
    }

    // 3. Status check
    if (admin.status !== "active") {
      return res.status(403).json({ message: "✖ Admin account disabled" });
    }

    res.json({
      message: "✔ Admin Login Successful",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email
      }
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;

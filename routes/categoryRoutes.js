const express = require("express");
const router = express.Router();
const Caategory = require("../models/Category");

//Admin - Category page
router.get("/admin/categories", async (req, res) => {
const categories = await Category.find();
res.render("admin/categories", { categories });
});

//Add category
router.post("/admin/categories/add" , 
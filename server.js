const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
res.sendFile(path.join(_dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});

// Add business (POST)
app.post("/add-business", (req, res) => {
const data = JSON.parse(fs.readFileSync(DATA_FILE));

const newBusiness = {
id: Date.now(),
name: req.body.name,
category: req.body.category,
city: req.body.city,
phone: req.body.phone,
status: "pending"
};

data.push(newBusiness);

fs.writeFileSync(DATA_FILE, JSON.stringfy(data, null, 2));

res.send("<h2>Business submitted for approval</h2><a href='/'>Go Home</a>);
});

// Pending businesses
app.get("/api/pending", (req, res) => {
const data = JSON.parse(fs.readFileSync(DATA_FILE));
const pending = data.filter(b => b.status === "pending");
res.json(pending);
});

// Approved business
app.get("/api/approve", (req, res) => {
const id = Number(req.query.id);
const data = JSON.parse(fs.readFileSync(DATA_FILE));

const business = data.find(b => b.id === id);
if (business) {
business.status = "approved";
}

fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
res.send(Approved");
});

res.json(pending);
});

// API - get businesses by category

app.get("/api/businesses", (req, res) => {
const category = req.query.category;
const data = JSON.parse(fs.readFileSync(DATA_FILE));

const approved = data.filter(
b => b.category === category && b.status === "approved"
);
res.json(approved);
});

// City + Keyword Search

app.get("/api/search", (req, res) => {
const { q, city } = req.query;
const data = JSON.parse(fs.readFileSync(DATA_FILE));

const result = data.filter(b =>
b.status === "approved" &&
b.name.toLowerCase().includes(q.toLowerCase()) &&
b.city.toLowerCase().includes(city.toLowerCase())
);

res.json(result);
});

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(() => {
console.log("✔ MongoDB Atlas Connected ( Render)");
})
.catch((error) => {
console.log("✘ MongoDB Connection Error:", error.message):
});

// Admin Auth Routes

const adminAuthRoutes = require("./routes/adminAuthRoutes");

app.use("/api/admin", adminAuthRoutes);

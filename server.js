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

// API - get businesses by category
app.get("/api/businesses", (req, res) => {
const category = req.query.category;
const data = JSON.parse(fs..readFileSync(DATA_FILE));

const filtered = data.filter(b => b.category === category);
res.json(filtered);
});

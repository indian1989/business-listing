npm init -y
npm install express mongoose ejs body-parser bcryptjs express-session

const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
res.sendFile(_dirname + "/public/index.html");
});

app.lsten(3000, () => {
console.log("server running on http://localhost:3000");
});
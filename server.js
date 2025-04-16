const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/climate-crisis", (req, res) => {
  res.redirect("https://github.com/Justin-Khyle/Climate-Page");
});

app.get("/typesetting", (req, res) => {
  res.redirect("https://github.com/Justin-Khyle/typesetting");
});

app.get("/four-algorithms", (req, res) => {
  res.redirect("https://github.com/Justin-Khyle/Four-Sorting-Algorithms");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Home route (serves index.html from the root)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  res.redirect("https://github.com/Justin-Khyle/Climate-Page");
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  res.redirect("https://github.com/Justin-Khyle/typesetting");
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.redirect("https://github.com/Justin-Khyle/Four-Sorting-Algorithms");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


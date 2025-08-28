const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname)); // отдаём всё из корня

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // ищем именно в корне
});

app.listen(process.env.PORT || 3000, () => {
  console.log("✅ Server running on port " + (process.env.PORT || 3000));
});

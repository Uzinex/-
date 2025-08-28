const express = require("express");
const path = require("path");
const app = express();

// Раздаём все статические файлы из корня
app.use(express.static(__dirname));

// Главная страница
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Запуск
app.listen(process.env.PORT || 3000, () => {
  console.log("✅ Server running on port " + (process.env.PORT || 3000));
});

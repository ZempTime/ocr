const express = require("express");
const recognize = require("tesseractocr");
const multer = require("multer");
const upload = multer();
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", (_req, res) => {
  res.send(`ಠ_ಠ`);
});

app.post("/parse", upload.single("image"), function(req, res) {
  console.log(`Processing ${req.file.originalname}`);
  recognize(req.file.buffer, (err, text) => {
    if (err) throw err;
    res.status(200).json({ text });
  });
});

app.listen(PORT, () => {
  console.log("Listening at " + PORT);
});

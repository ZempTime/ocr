const express = require("express");
const recognize = require("tesseractocr");
const multer = require("multer");
const upload = multer();
const cors = require("cors");

const app = express();

const PORT = 9001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("wat");
});

app.post("/parse", upload.single("image"), function(req, res) {
  console.log(`Processing ${req.file.originalname}`);
  recognize(req.file.buffer, (err, text) => {
    if (err) throw err;
    res.json(200, { text });
  });
});

app.listen(PORT, () => {
  console.log("Listening at " + PORT);
});

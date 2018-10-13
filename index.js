const express = require("express");
const recognize = require("tesseractocr");
const multer = require("multer");
const upload = multer();
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8080;

let corsOptions;

// if (process.env.NODE_ENV === "production") {
//   corsOptions = {
//     origin: "https://guidegh7.netlify.com/"
//   };
// } else {
// corsOptions = {};
// }

app.use(cors());

app.get("/", (req, res) => {
  res.send(`ಠ_ಠ`);
});

app.post("/parse", cors());

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

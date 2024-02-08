const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/test", (req, res) => {});

app.listen(3002, () => {
  console.log("listening on http://localhost:3002");
});

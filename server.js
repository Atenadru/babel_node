import express from "express";

const app = express();
const port = 3003;

app.get("/", function (req, res) {
  res.send("hello word");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

const express = require("express");
const app = express();

const mySecret = "I love dogs";

app.get("/", (req, res) => {
  res.send("This is my secret: " + mySecret);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

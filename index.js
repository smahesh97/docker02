const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi Mahesh, I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.”
― Albert Einstein:)");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

app.listen(80, () => {
  console.log("listening on 80 again");
});

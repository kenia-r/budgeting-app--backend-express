const express = require("express");
const cors = require("cors");
const transactions = require("./controllers/transactionsController.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/transactions", transactions);

app.get("/", (req, res) => {
  res.send("Basic Express App - ROOT");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;

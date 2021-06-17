const transactions = require("express").Router();
const transactionsArray = require("../models/transactions");

transactions.get("/:id", (req, res) => {
  res.send("Basic Express App - ROOT");
});

transactions.get("/", (req, res) => {
  res.send(transactionsArray);
});

transactions.post("/", (req, res) => {
  const { body } = req;
  res.json(transactionsArray.push(body));
});


module.exports = transactions;

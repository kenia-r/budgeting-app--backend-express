const transactions = require("express").Router();
const transactionsArray = require("../models/transactions");

transactions.get("/", (req, res) => {
  res.send(transactionsArray);
});

transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  if (transactionsArray[id]) {
    res.json(transactionsArray[id]);
  } else {
    res.redirect("/404");
  }
});

transactions.post("/", (req, res) => {
  const { body } = req;
  transactionsArray.push(body);
  const newTransaction = transactionsArray.length - 1;
  res.json(transactionsArray[newTransaction]);
});

transactions.put("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  transactionsArray[id] = body;
  res.json(transactionsArray[id]);
});

transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deletedTransaction = transactionsArray.splice(id, 1);
  res.json(deletedTransaction[0]);
});

module.exports = transactions;

const _ = require("lodash");
const { PublishRide } = require("../models/publishRide");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;
  let rides = await PublishRide.find({
    from: data.from,
    to: data.to,
    date: { $gte: data.fromDate, $lte: data.toDate },
    //date: { $gt: data.date },
  });
  if (!rides) return res.status(400).send("No rides available");
  res.send(rides);
});

module.exports = router;

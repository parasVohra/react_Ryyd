const _ = require("lodash");
const { PublishRide } = require("../models/publishRide");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  let rides = await PublishRide.find({});
  if (!rides) return res.status(400).send("No rides available");

  res.send(rides);
});

module.exports = router;

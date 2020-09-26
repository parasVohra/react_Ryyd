const _ = require("lodash");
const { RequestRide } = require("../models/requestRide");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  let rides = await RequestRide.find({});
  if (!rides)
    return res.status(400).send("There is no request rides available");

  res.send(rides);
});

module.exports = router;

const auth = require("../middleware/auth");
const _ = require("lodash");
const { RequestRide, validate } = require("../models/requestRide");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  ride = new RequestRide(
    _.pick(req.body, ["userID", "userName", "from", "goingTo", "date", "time"])
  );

  await ride.save();

  res.send(_.pick(ride, ["userName", "from", "goingTo", "date", "time"]));
});

module.exports = router;

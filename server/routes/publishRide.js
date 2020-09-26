const auth = require("../middleware/auth");
const _ = require("lodash");
const { PublishRide, validate } = require("../models/publishRide");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  ride = new PublishRide(
    _.pick(req.body, [
      "userID",
      "userName",
      "from",
      "to",
      "stops",
      "date",
      "time",
      "seats",
      "price",
      "info",
      "phoneNumber",
      "email",
    ])
  );

  await ride.save();

  res.send(
    _.pick(ride, [
      "userName",
      "from",
      "to",
      "stops",
      "date",
      "time",
      "seats",
      "price",
      "info",
      "phoneNumber",
      "email",
    ])
  );
});

module.exports = router;

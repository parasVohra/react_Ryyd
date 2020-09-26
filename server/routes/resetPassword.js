const _ = require("lodash");
const { User } = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { resetLink, password } = req.body;
  console.log(req.body);
  if (resetLink) {
    jwt.verify(resetLink, config.get("jwtPrivateKey"), async function (
      error,
      decodeData
    ) {
      if (error) {
        return res
          .status(401)
          .send({ error: "Invalid token or your token has been expired." });
      }
      let user = await User.findOne({ resetLink });
      if (!user) {
        return res.status(400).send(`User with this token does not exits`);
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      user.resetLink = "";
      const success = await user.save();
      if (success) {
        const token = user.generateAuthToken();
        return res
          .status(200)
          .header("x-auth-token", token)
          .header("access-control-expose-headers", "x-auth-token")
          .send(_.pick(user, ["_id", "name", "email"]));
      }
    });
  } else {
    return res.status(401).send({ error: "Authentication error" });
  }
});

module.exports = router;

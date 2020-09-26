const _ = require("lodash");
const { User } = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const mailer = require("../nodemailer/nodemailer");

router.post("/", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  let user = await User.findOne({ email: email });
  if (!user)
    return res.status(400).send(`User with email ${email} does not exists`);

  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email },
    config.get("jwtPrivateKey"),
    { expiresIn: "30m" }
  );

  return await User.updateOne(
    { _id: user._id },
    { $set: { resetLink: token } },
    (err, data) => {
      if (err) {
        return res.status(400).send(`error while updating user token: ${err}`);
      } else {
        mailer.sendMail(user.email, token);
        return res.send(
          `Reset Link is sent to ${email} Please follow the instructions from there `
        );
      }
    }
  );
});

module.exports = router;

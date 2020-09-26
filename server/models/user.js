const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  phoneNumber: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  resetLink: {
    type: String,
    default: "",
    maxlength: 1024,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
    },
    config.get("jwtPrivateKey")
  );
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).max(55).required(),
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    phoneNumber: Joi.number()
      .integer()
      .min(1000000000)
      .max(9999999999)
      .label("Phone Number")
      .messages({
        "number.base": "Phone number must be 10 digit long.",
        "number.min": "Phone number must be 10 digit long.",
        "number.max": "Phone number must be 10 digit long.",
      }),
  });

  return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;

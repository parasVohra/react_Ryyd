const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const publishRideSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  to: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    unique: true,
  },
  stops: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 255,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  info: {
    type: String,
    required: false,
    maxlength: 255,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255,
  },
});

const PublishRide = mongoose.model("PublishRide", publishRideSchema);

function validatePublishRide(ride) {
  const schema = Joi.object().keys({
    userID: Joi.string().required(),
    userName: Joi.string().required(),
    from: Joi.string().min(3).max(255).required().label("From"),
    to: Joi.string().min(3).max(255).required().label("To"),
    stops: Joi.string().min(3).max(255).label("Stops"),
    date: Joi.date().required().label("Date"),
    time: Joi.string().required().label("Time"),
    seats: Joi.number().min(1).max(7).required().label("Seat"),
    price: Joi.number().required().label("Price"),
    info: Joi.string().max(255).label("Info"),
    email: Joi.string().min(3).max(255).required().email(),
    phoneNumber: Joi.number()
      .integer()
      .min(1000000000)
      .max(9999999999)
      .label("Phone Number"),
  });

  return schema.validate(ride);
}

exports.PublishRide = PublishRide;
exports.validate = validatePublishRide;

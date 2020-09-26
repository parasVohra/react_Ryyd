const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const requestRideSchema = new mongoose.Schema({
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
  goingTo: {
    type: String,
    required: true,
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
});

const RequestRide = mongoose.model("RequestRide", requestRideSchema);

function validateRequestRide(ride) {
  const schema = Joi.object().keys({
    userID: Joi.string().required(),
    userName: Joi.string().required(),
    from: Joi.string().min(3).max(255).required().label("From"),
    goingTo: Joi.string().min(3).max(255).required().label("To"),
    date: Joi.date().required().label("Date"),
    time: Joi.string().required().label("Time"),
  });

  return schema.validate(ride);
}

exports.RequestRide = RequestRide;
exports.validate = validateRequestRide;

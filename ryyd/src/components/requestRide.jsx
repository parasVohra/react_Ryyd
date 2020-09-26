import React from "react";
import Form from "../common/form";
import rideService from "../services/rideService";
import Joi from "@hapi/joi";
import auth from "../services/authService";

class RequestRide extends Form {
  state = {
    data: {
      from: "",
      goingTo: "",
      date: "",
      time: "",
    },
    errors: {},
  };

  schema = {
    from: Joi.string().min(3).max(255).required().label("From"),
    goingTo: Joi.string().min(3).max(255).required().label("To"),
    date: Joi.date().greater("now").required().label("Date"),
    time: Joi.string().required().label("Time"),
  };

  async doSubmit() {
    const user = auth.getCurrentUser();
    const rideReqData = { ...this.state.data };
    rideReqData.userName = user.name;
    rideReqData.userID = user._id;
    this.setState({ rideReqData });
    try {
      const response = await rideService.requestRide(rideReqData);
      console.log(response);
    } catch (ex) {
      const errors = { ...this.state.errors };
      errors.from = ex.response;
      this.setState({ errors });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("from", "From")}
          {this.renderInput("goingTo", "To")}
          {this.renderInput("date", "Date of Journey", "date")}
          {this.renderInput("time", "Time", "time")}
          {this.renderButton("Drop Ride Request")}
        </form>
      </div>
    );
  }
}

export default RequestRide;

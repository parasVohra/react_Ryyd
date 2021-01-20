import React from "react";
import Form from "../common/form";
import rideService from "../services/rideService";
import Joi from "@hapi/joi";
import auth from "../services/authService";
import Popup from "../services/utilityService";

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
    date: Joi.date().required().label("Date"),
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
      if (response.status === 200) {
        Popup.showPopup(
          this.props,
          "Ride Request is successfully posted",
          "/dashboard"
        );
      }
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
          {this.renderCitySelect("from", "From")}
          {this.renderCitySelect("goingTo", "To")}
          {this.renderInput("date", "Date of Journey", "date")}
          {this.renderInput("time", "Time", "time")}
          {this.renderButton("Drop Ride Request")}
        </form>
      </div>
    );
  }
}

export default RequestRide;

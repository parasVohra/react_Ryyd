import React from "react";
import Form from "../common/form";
import Joi from "@hapi/joi";
import rideService from "../services/rideService";
import auth from "../services/authService";
import Popup from "../services/utilityService";

class OfferRide extends Form {
  state = {
    data: {
      from: "",
      to: "",
      date: "",
      stops: "",
      time: "",
      seats: "",
      price: "",
      info: "",
    },
    errors: {},
  };

  schema = {
    from: Joi.string().min(3).max(255).required().label("From"),
    to: Joi.string().min(3).max(255).required().label("To"),
    stops: Joi.string().min(3).max(255).label("Stops"),
    date: Joi.date().greater("now").required().label("Date"),
    time: Joi.string().required().label("Time"),
    seats: Joi.number().min(1).max(7).required().label("Seat"),
    price: Joi.number().required().label("Price"),
    info: Joi.string().max(255).label("Info"),
  };

  async doSubmit() {
    const user = auth.getCurrentUser();
    const publishData = { ...this.state.data };
    publishData.userName = user.name;
    publishData.userID = user._id;
    publishData.phoneNumber = user.phoneNumber;
    publishData.email = user.email;
    this.setState({ publishData });
    console.log(publishData);

    try {
      const response = await rideService.publishRide(publishData);
      console.log(response);
      if (response.status === 200) {
        Popup.showPopup(
          this.props,
          "Ride is successfully published",
          "/dashboard"
        );
      }
      this.props.history.push("/dashboard");
    } catch (ex) {
      const errors = { ...this.state.errors };
      errors.from = ex.response;
      this.setState({ errors });
    }
  }

  render() {
    return (
      <div className="container-sm">
        <h1>Offer Ride</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("from", "From")}
          {this.renderInput("to", "To")}
          {this.renderInput("stops", "Additional Stops")}
          {this.renderInput("date", "Date of Journey", "date")}
          {this.renderInput("time", "Time", "time")}
          {this.renderInput("seats", "No. of seats", "number")}
          {this.renderInput("price", "Price per seat", "number")}
          {this.renderInput("info", "Additional Info")}

          {this.renderButton("Publish")}
        </form>
      </div>
    );
  }
}

export default OfferRide;

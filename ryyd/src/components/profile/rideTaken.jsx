import React from "react";
import Form from "../../common/form";
import Joi from "@hapi/joi";

class RideTaken extends Form {
  state = {
    data: {
      fromCity: "",
    },
    errors: {},
  };

  schema = {
    fromCity: Joi.string(),
  };

  render() {
    return (
      <div>
        Ride Taken Info page
        {this.renderCitySelect("fromCity", "From")}
      </div>
    );
  }
}

export default RideTaken;

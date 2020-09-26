import auth from "../../services/authService";
import React from "react";
import Form from "../../common/form";
import Joi from "@hapi/joi";
import userService from "../../services/userService";
import { Redirect } from "react-router-dom";

class Register extends Form {
  state = {
    data: { email: "", password: "", name: "", phoneNumber: "" },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(5)
      .max(255)
      .required()
      .label("Email"),
    password: Joi.string().min(5).max(255).required().label("Password"),
    name: Joi.string().min(3).max(40).required().label("Name"),
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
  };

  async doSubmit() {
    console.log("submitted");

    try {
      const response = await userService.register(this.state.data);
      console.log(response);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/dashboard";
    } catch (ex) {
      const errors = { ...this.state.errors };
      errors.email = ex.response.data;
      this.setState({ errors });
    }
  }

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/dashboard" />;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("phoneNumber", "Phone Number", "number")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;

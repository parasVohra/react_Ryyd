import React from "react";
import Form from "../../common/form";
import Joi from "@hapi/joi";
import jwtDecode from "jwt-decode";
import auth from "../../services/authService";

class ResetPassword extends Form {
  state = {
    data: { password: "", confirmPassword: "" },
    errors: {},
  };
  schema = {
    password: Joi.string().min(5).max(255).required().label("Password"),
    confirmPassword: Joi.string().min(5).max(255).required().label("Password"),
  };

  async doSubmit() {
    const resetLink = this.props.match.params.token;
    const newPassword = { ...this.state.data };
    newPassword.resetLink = resetLink;
    this.setState({ newPassword });

    try {
      const response = await auth.resetPassword(newPassword);
      console.log(response);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      alert("Password updated successfully");
      window.location = "/dashboard";
    } catch (ex) {
      const errors = { ...this.state.errors };
      errors.password = ex.response;
      this.setState({ errors });
    }
  }

  render() {
    //let user = jwtDecode(this.props.match.params.token);
    return (
      <div className="row">
        <div>
          <form onSubmit={this.handleSubmit}>
            <legend>Setup New Password</legend>
            {this.renderInput("password", "New Password", "password")}
            {this.renderInput(
              "confirmPassword",
              "Confirm Password",
              "password"
            )}
            {this.renderButton("Reset Password")}
          </form>
        </div>
      </div>
    );
  }
}

export default ResetPassword;

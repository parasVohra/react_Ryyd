import React from "react";
import Form from "../../common/form";
import Joi from "@hapi/joi";
import auth from "../../services/authService";

class ForgotPassword extends Form {
  state = {
    data: { email: "" },
    errors: {},
    message: "",
  };
  schema = {
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(5)
      .max(255)
      .required()
      .label("Email"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const res = await auth.forgotPassword(data.email);
      const response = { ...this.state.data };
      response.message = res.data;
      this.setState(response);
      console.log(this.state);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const message = this.state.message;

    console.log(message);

    return (
      <div>
        {message ? (
          <div>{message}</div>
        ) : (
          <div className="row">
            <div>
              <form onSubmit={this.handleSubmit}>
                <legend>Forget Password</legend>
                {this.renderInput("email", "Email")}
                {this.renderButton("Reset Password")}
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ForgotPassword;

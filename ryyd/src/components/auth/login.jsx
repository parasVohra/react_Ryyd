import React from "react";
import Form from "../../common/form";
import Joi from "@hapi/joi";
import auth from "../../services/authService";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
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
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      const { state } = this.props.location;
      const a = this.props.loginSuccess();
      console.log(a);
      window.location = state ? state.from.pathname : "/dashboard";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
          <Link to="/forgotPassword">
            <p>Forgot Password</p>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  loginSuccess: () => dispatch({ type: "loginSuccess" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

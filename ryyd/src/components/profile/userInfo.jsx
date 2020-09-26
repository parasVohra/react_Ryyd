import React from "react";
import Form from "../../common/form";
import { connect } from "react-redux";
import Joi from "@hapi/joi";

class UserInfo extends Form {
  state = {
    data: {
      name: this.props.name,
      email: this.props.email,
      phoneNumber: this.props.phoneNumber,
    },
    errors: {},
  };

  componentDidMount() {
    console.log(this.props);
  }

  schema = {
    name: Joi.string().max(255).label("Name"),
    email: Joi.string().max(255).label("Email"),
    phoneNumber: Joi.number().label("Mobile Number"),
  };

  render() {
    return (
      <div>
        {this.renderInput("name", "Full Name", "text", "readOnly")}
        {this.renderInput("email", "Email", "", "readOnly")}
        {this.renderInput("phoneNumber", "Mobile Phone", "", "readOnly")}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    name: state.auth.user.name,
    email: state.auth.user.email,
    phoneNumber: state.auth.user.phoneNumber,
  };
};

export default connect(mapStateToProps)(UserInfo);

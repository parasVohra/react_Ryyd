import { Component } from "react";
import auth from "../../services/authService";
import { connect } from "react-redux";

class Logout extends Component {
  state = {};

  componentDidMount() {
    auth.logout();
    this.props.logoutSuccess();
    window.location = "/";
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  logoutSuccess: () => dispatch({ type: "logoutSuccess" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

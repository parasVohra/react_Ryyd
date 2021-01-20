import React from "react";
import Form from "../common/form";
import rideService from "../services/rideService";
import Joi from "@hapi/joi";
import ShowRides from "./showRides";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import { searchedRide } from "../store/rides";
import { DateInput } from "../common/input";
import { detect } from "detect-browser";

class SearchRide extends Form {
  state = {
    data: {
      from: "",
      to: "",
      fromDate: "",
      toDate: "",
    },
    searchData: "",
    errors: {},
  };

  date = moment().format("YYYY-MM-DD");

  componentDidMount() {}

  schema = {
    from: Joi.string().min(3).max(255).required().label("From"),
    to: Joi.string().min(3).max(255).required().label("To"),
    fromDate: Joi.date().required().label("From Date"),
    toDate: Joi.date().required().label("To Date"),
  };

  async doSubmit() {
    const searchData = this.state.data;
    try {
      const response = await rideService.searchRides(searchData);
      this.props.requestedRide();
      this.props.searchedRide(response.data);

      console.log(response.data);
      //Save searched data to local storage
      localStorage.setItem("searchedRides", JSON.stringify(response.data));
    } catch (ex) {
      const errors = { ...this.state.errors };
      errors.from = ex.response;
      this.setState({ errors });
    }
  }

  render() {
    const rideList = this.props.ride.searchedRide;
    const browser = detect();
    let message;
    if (rideList) {
      if (rideList.length === 0) {
        message = (
          <div>
            <p>There is no ride available at this point</p>
            <Link to="/requestRide">
              <button to="/offerRide" className="btn btn-primary">
                Drop Request
              </button>
            </Link>
          </div>
        );
      } else {
        message = (
          <div>
            {rideList.map((ride, index) => (
              <Link
                to={{
                  pathname: "/showRideInfo",
                  state: { index: index },
                }}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                key={ride._id}
              >
                <ShowRides params={index} key={ride._id} ride={ride} />
              </Link>
            ))}
          </div>
        );
      }
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* {this.renderInput("from", "From")} */}
          {this.renderCitySelect("from", "From")}
          {this.renderCitySelect("to", "To")}
          {this.DateInput("fromDate", "From Date")}
          {this.DateInput("toDate", "To Date")}
          {this.renderButton("Search")}
        </form>
        <div>{message}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ride: state.ride,
});

const mapDispatchToProps = dispatch => ({
  searchedRide: ride =>
    dispatch({
      type: "searchedRide",
      payload: { message: ride },
    }),
  requestedRide: () => dispatch({ type: "requestedRide" }),
  selectedRides: index =>
    dispatch({
      type: "selectedRide",
      payload: index,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchRide);

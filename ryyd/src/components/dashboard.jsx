import React, { Component } from "react";
import rideService from "../services/rideService";
import ShowRides from "./showRides";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {};
  async componentDidMount() {
    const rides = await rideService.getRides();
    const rideList = [rides.data];
    this.setState({ rideList });
  }

  render() {
    const rideList = this.state.rideList;

    return (
      <div>
        <div className="row vh-40">
          <button type="button" className="btn btn-lg btn-outline-primary m-3">
            <Link
              className="nav-item nav-link text-black-50 text-center"
              to="/searchRide"
            >
              Need a Ride
            </Link>
          </button>

          <button
            type="button"
            className="btn btn-lg btn-outline-secondary m-3"
          >
            <Link
              className="nav-item nav-link text-black-50 text-center"
              to="/offerRide"
            >
              Offer a Ride
            </Link>
          </button>
        </div>

        {rideList ? (
          rideList[0].map(ride => {
            return <ShowRides key={ride._id} ride={ride} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.entities.auth,
});

connect(mapStateToProps);
export default Dashboard;

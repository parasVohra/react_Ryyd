import React from "react";
import { connect } from "react-redux";
import { Component } from "react";

class RideInfo extends Component {
  state = {
    data: "",
  };

  render() {
    let hasSearchData = localStorage.getItem("searchedRides");
    const localData = JSON.parse(hasSearchData);
    console.log(this.props);

    const selectedRideIndex = this.props.location.state.index;
    // const ride = this.props.ride.searchedRide[selectedRideIndex];
    console.log(this.state);
    const ride = localData[selectedRideIndex];

    return (
      <div>
        <div className="row justify-content-md-center my-3">
          <div className="card col-md-8 col-sm-10 shadow">
            <div className="card-title my-2 mx-3 text-primary row">
              <div className="col">
                Departure: {ride.date} at {ride.time}
              </div>
              <div className="col">Phone Number : {ride.phoneNumber}</div>
            </div>

            <div className="card-body row">
              <div className="col">
                <p>{ride.userName}</p>
                <p>4 Rating</p>
              </div>
              <div className="col">
                <p className="text-secondary">FROM</p>
                <strong>{ride.from}</strong>
              </div>
              <div className="col">
                <strong style={{ fontSize: "50px" }}>&#8674;</strong>
                <p></p>
              </div>
              <div className="col">
                <p className="text-secondary">TO</p>
                <strong>{ride.to}</strong>
              </div>
              <div className="col ">
                <h2 className="text-success">${ride.price}</h2>
              </div>
            </div>
            <div className=" text-center text-secondary">
              <p> Stops: {ride.stops}</p>
            </div>
            <div>Vehicle details</div>
            <div>Name: Mazda Color: White Seats: 5</div>
            <button variant="primary" className="btn btn-primary col-3">
              Send Email
            </button>

            <button
              href={"sms:+1 " + ride.phoneNumber}
              variant="primary"
              className="btn btn-primary col-3"
            >
              Send Text
            </button>
          </div>
        </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(RideInfo);

//export default connect(mapStateToProps)(RideInfo);

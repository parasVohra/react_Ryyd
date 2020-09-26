import React, { Component } from "react";

class ShowRides extends Component {
  state = {};

  render() {
    const ride = this.props.ride;
    return (
      <div>
        <div className="row justify-content-md-center my-3">
          <div
            className="card col-md-6 col-sm-10 shadow"
            style={{ height: "200px" }}
          >
            <div className="card-title my-2 mx-3 text-primary">
              Departure: {ride.date} at {ride.time}
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
          </div>
        </div>
      </div>
    );
  }
}
export default ShowRides;

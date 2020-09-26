import React, { Component } from "react";
import rideService from "../services/rideService";

class ShowRequestRide extends Component {
  state = {};
  async componentDidMount() {
    const { data } = await rideService.getRequestRide();
    this.setState({ data });
    //console.log(data);
  }
  render() {
    const rideList = this.state.data;
    return (
      <div>
        {rideList ? (
          rideList.map(ride => {
            return (
              <div key={ride._id}>
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
                        <strong>{ride.goingTo}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p> </p>
        )}
      </div>
    );
  }
}

export default ShowRequestRide;

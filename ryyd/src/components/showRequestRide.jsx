import React, { Component } from "react";
import rideService from "../services/rideService";
import Badge from "react-bootstrap/Badge";

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
                <div className="row-md-8  row-sm-10 justify-content-md-center my-3">
                  <div
                    className="card col-md-12 col-sm-12 shadow"
                    style={{ height: "200px" }}
                  >
                    <div className="card-title row my-2 mx-3 text-primary">
                      <div className="col-11">
                        Departure: {ride.date} at {ride.time}
                      </div>
                      <h3 className="col-1" style={{ marginTop: "-20px" }}>
                        <Badge pill variant="primary">
                          9
                        </Badge>
                      </h3>
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

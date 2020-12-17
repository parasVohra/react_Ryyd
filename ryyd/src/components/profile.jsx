import React, { Component } from "react";
import UserInfo from "./profile/userInfo";
import CarInfo from "./profile/carInfo";
import RideTaken from "./profile/rideTaken";
import RideOffered from "./profile/rideOffered";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import { Row, Col } from "react-bootstrap";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

class Profile extends Component {
  state = {};
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <div>
          <Tab.Container
            id="list-group-tabs-example"
            defaultActiveKey="#profileInfo"
          >
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item action href="#profileInfo">
                    Profile Info
                  </ListGroup.Item>
                  <ListGroup.Item action href="#car">
                    Car
                  </ListGroup.Item>
                  <ListGroup.Item action href="#rideOffered">
                    Ride Offered
                  </ListGroup.Item>
                  <ListGroup.Item action href="#rideTaken">
                    Ride Taken
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#profileInfo">
                    <UserInfo />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#car">
                    <CarInfo />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#rideOffered">
                    <RideOffered />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#rideTaken">
                    <RideTaken />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Provider>
    );
  }
}

export default Profile;

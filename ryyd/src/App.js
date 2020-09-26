import auth from "./services/authService";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import NotFound from "./components/auth/notfound";
import Login from "./components/auth/login";
import Logout from "./components/auth/logout";
import Register from "./components/auth/register";
import ResetPassword from "./components/auth/resetPassword";
import "./App.css";
import NavBar from "./common/navbar";
import Home from "./components/home";
import ProtectedRoute from "./common/protectedRoute";

import Dashboard from "./components/dashboard";
import OfferRide from "./components/offerRide";
import ShowRides from "./components/showRides";
import SearchRide from "./components/searchRide";
import RequestRide from "./components/requestRide";
import ForgotPassword from "./components/auth/forgotPassword";
import ShowRequestRide from "./components/showRequestRide";
import RideInfo from "./components/showRideInfo";

import UserInfo from "./components/profile/userInfo";
import CarInfo from "./components/profile/carInfo";
import RideOffered from "./components/profile/rideOffered";
import RideTaken from "./components/profile/rideTaken";
import Profile from "./components/profile";
import configureStore from "./store/configureStore";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <React.Fragment>
          <NavBar user={this.state.user} />
          <main className="container-sm">
            <Switch>
              <Route path="/profile" component={Profile} />
              <Route path="/rideTaken" component={RideTaken} />
              <Route path="/rideOffered" component={RideOffered} />
              <Route path="/carInfo" component={CarInfo} />
              <Route path="/userInfo" component={UserInfo} />
              <Route path="/resetPassword/:token" component={ResetPassword} />
              <Route path="/forgotPassword" component={ForgotPassword} />
              <Route path="/showRequestRide" component={ShowRequestRide} />
              <ProtectedRoute path="/requestRide" component={RequestRide} />
              <ProtectedRoute path="/searchRide" component={SearchRide} />
              <ProtectedRoute path="/showRide" component={ShowRides} />
              <ProtectedRoute path="/showRideInfo" component={RideInfo} />
              <ProtectedRoute path="/offerRide" component={OfferRide} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <Route path="/logout" component={Logout}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/Register" component={Register}></Route>
              <Route path="/not-found" component={NotFound}></Route>
              <Redirect from="/" exact to="/home" />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    const Styles = {
      mainCard: {
        backgroundColor: "black",
        width: "100px",
        height: "100px",
      },
    };
    return (
      <div className="container justify-content-center vh-100">
        <div style={Styles.mainCard}>d</div>
      </div>
    );
  }
}

export default Home;

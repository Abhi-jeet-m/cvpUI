import React, { Component } from "react";

class ServerMaintainance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <div style={{ textAlign: "center", marginTop: "5%" }}>
          <h1>Digital Signing Agreement Portal</h1>
        </div>

        <div>
          <h3 style={{ textAlign: "center", marginTop: "10%" }}>
            Server under maintenance. Sorry for the inconvenience.Please login after 5 PM. 10-jAN-2024
          </h3>
        </div>
      </div>
    );
  }
}
export default ServerMaintainance;

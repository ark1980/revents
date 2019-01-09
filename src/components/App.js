import React, { Component } from "react";
import EventDashboard from "./EventDashboard";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <EventDashboard />
      </div>
    );
  }
}

export default App;

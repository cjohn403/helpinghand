import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddEvent from "./Components/AddEvent/AddEvent";

class App extends Component {
  state = {
    events: [{ id: "", name: "", eventName: "" }]
  };

  // changeHandler = (event) => {};

  setEvent = (events) => {
    this.setState({
      events: events
    });
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1> Welcome to Helping Hand</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <AddEvent
                eventCallback={this.setEvent}
                data={this.state.events}
              />
            </div>
            <div className="col-md-6">hello</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

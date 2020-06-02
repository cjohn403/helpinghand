import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
// import "./App.css";
// import AddEvent from "./Components/AddEvent/AddEvent";
import CurrentLocation from "./Components/CurrentLocation/CurrentLocation";

let image;

let marker;

class App extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    markers: [
      {
        position: { lat: 34.0388319, lng: -84.5827453 },
        info: { name: "Alpha Delta Nu Covd 19 Giftcard giveaway" }
      },
      {
        position: { lat: 33.7476109, lng: -84.3945527 },
        info: { name: "Meyer's Health Center" }
      },
      {
        position: { lat: 33.78157424926758, lng: -84.41114807128906 },
        info: { name: "City of Refuge" }
      },
      {
        position: { lat: 33.91323300953537, lng: -84.36183582372979 },
        info: { name: "Salvation Army Heating Station" }
      },
      {
        position: { lat: 33.785491943359375, lng: -84.44329833984375 },
        info: { name: "Covenant House Heating Station" }
      },
      {
        position: { lat: 33.7476109, lng: -84.3945527 },
        info: { name: "Gateway Warming Station" }
      },
      {
        position: { lat: 33.77176284790039, lng: -84.47486877441406 },
        info: { name: "Love Beyond Walls Hand washing Station" }
      },
      {
        position: { lat: 33.89816, lng: -84.28326 },
        info: { name: "I Care Atlanta Food Bank" }
      },
      {
        position: { lat: 33.8158454, lng: -84.3432882 },
        info: { name: "Atlanta Community Food Bank" }
      },
      {
        position: { lat: 33.77176284790039, lng: -84.47486877441406 },
        info: { name: "Love Beyond Walls Hand washing Station" }
      },
      {
        position: { lat: 33.97802734375, lng: -84.5534439086914 },
        info: { name: "Must Ministries" }
      },
      {
        position: { lat: 33.698829650878906, lng: -84.13639068603516 },
        info: {
          name: "New Birth Baptist (COVD-19 Drive through testing) "
        }
      },
      {
        position: { lat: 33.91024398803711, lng: -84.58257293701172 },
        info: { name: "Cobb County Park (COVD-19 drive through testing) " }
      }
    ]
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  marker = () => {
    let markers = this.state.markers.map((data) => {
      console.log(data);
      console.log("data");
      return (
        <Marker
          position={data.position}
          name={data.info.name}
          onClick={this.onMarkerClick}
        />
      );
    });
    return markers;
  };

  // changeHandler = (event) => {};

  // generateMarkers = () => {
  //   this.state.markers.map((data, i) => {
  //     console.log(data);
  //     return (
  //       <Marker
  //         position={data.position}
  //         name={data.info.name}
  //         onClick={this.onMarkerClick}
  //       />
  //     );
  //   });
  // };
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
          <h2> Hands Extended: ({this.state.markers.length})</h2>
        </div>
        <div>
          <CurrentLocation
            centerAroundCurrentLocation
            google={this.props.google}
          >
            <Marker onClick={this.onMarkerClick} name={"Current Location"} />

            {this.marker()}

            {/* <Marker
              onClick={this.onMarkerClick}
              name={this.state.markers[0].info.name}
              position={this.state.markers[0].position}
            /> */}

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </CurrentLocation>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAhdbb0EH5BJper6b0NdYZQ2vRkjElScWA"
})(App);

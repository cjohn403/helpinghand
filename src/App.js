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
        info: { name: "Alpha Delta Nu Covd 19 Giftcard giveaway" }
      },
      {
        position: { lat: 33.78157424926758, lng: -84.41114807128906 },
        info: { name: "Alpha Delta Nu Covd 19 Giftcard giveaway" }
      }

]

}

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

  image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  marker = (
    <div>
      {this.state.markers.map((data, i) => {
        console.log(data);
        return (
          <Marker
            position={data.position}
            name={data.info.name}
            onClick={this.onMarkerClick}
          />
        );
      })}
    </div>
  );

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
        <div>
          <CurrentLocation
            centerAroundCurrentLocation
            google={this.props.google}
          >
            <Marker
              onClick={this.onMarkerClick}
              name={"Kenyatta International Convention Centre"}
            />


            {marker}

            <Marker
              onClick={this.onMarkerClick}
              name={this.state.markers[0].info.name}
              position={this.state.markers[0].position}
              icon={image}
            />

    

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

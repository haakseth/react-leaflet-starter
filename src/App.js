import React, { Component } from 'react';
import MapContainer from './components/MapContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 59,
      lng: 10,
      zoom: 7
    };
  }
  componentDidMount() {
    // Test changing props here
    // setInterval(() => {
    //   this.setState({ lng: this.state.lng + 1 });
    // }, 2000);
  }
  render() {
    return (
      <MapContainer
        latitude={this.state.lat}
        longitude={this.state.lng}
        zoom={this.state.zoom}
      />
    );
  }
}

export default App;

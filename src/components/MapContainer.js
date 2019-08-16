import React, { Component } from 'react';
import L from 'leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';

class MapContainer extends Component {
  setupMap() {
    const { longitude, latitude, zoom } = this.props;
    this.map = L.map(this.mapContainer, {
      center: [latitude, longitude],
      zoom: zoom
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map
    );
  }

  // Runs once when component is created
  componentDidMount() {
    console.log('componentDidMount');
    this.setupMap();
  }

  // Runs every time props or state changes
  componentDidUpdate(prevprops) {
    console.log('componentDidUpdate');
    const { longitude, latitude, zoom } = this.props;

    // Listen for changes in latitude/longitude props
    if (prevprops.longitude !== longitude || prevprops.latitude !== latitude) {
      this.map.setView([latitude, longitude]);
    }

    // Listen for changes in zoom prop
    if (prevprops.zoom !== zoom) {
      this.map.setZoom(zoom);
    }
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };
    return <div style={style} ref={el => (this.mapContainer = el)} />;
  }
}

export default MapContainer;

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';

export default function Map({ latitude, longitude }) {
  useEffect(() => {
    // Initialize the map
    // const map = L.map('map').setView([latitude, longitude], 13);
    const map = L.map('map', {
      center: [latitude, longitude],
      zoom: 17,
      zoomControl: false,
    });

    // Set up the OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker at the specified location
    L.marker([latitude, longitude]).addTo(map);

    // Custom Zoom In button
    const zoomInButton = L.control({ position: 'topleft' });
    zoomInButton.onAdd = () => {
      const button = L.DomUtil.create('button', 'custom-zoom-button');
      button.innerHTML = '+';
      button.onclick = () => map.zoomIn();
      return button;
    };
    zoomInButton.addTo(map);

    // Custom Zoom Out button
    const zoomOutButton = L.control({ position: 'topleft' });
    zoomOutButton.onAdd = () => {
      const button = L.DomUtil.create('button', 'custom-zoom-button');
      button.innerHTML = '-';
      button.onclick = () => map.zoomOut();
      return button;
    };
    zoomOutButton.addTo(map);

    return () => {
      map.remove(); // Clean up the map on unmount
    };
  }, [latitude, longitude]);

  return <div id="map" style={{ height: '300px', width: '100%' }}></div>;
}

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

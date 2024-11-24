import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import enhancedMarker from '../../assets/images/enhanced-marker.png';

// Create a custom icon
const customIcon = L.icon({
  iconUrl: enhancedMarker, // Path to your logo
  iconSize: [40, 55], // Size of the icon [width, height]
  iconAnchor: [20, 40], // Anchor point (center bottom of the icon)
  popupAnchor: [0, -40], // Point where the popup opens
});
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
    L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

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

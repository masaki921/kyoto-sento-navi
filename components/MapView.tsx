'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// 赤いピンのアイコン設定
const redIcon = new L.Icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const sentoData = [
  {
    name: 'サウナの梅湯',
    position: [35.0026, 135.7621],
  },
  {
    name: '白山湯 高瀬川店',
    position: [34.9938, 135.7662],
  },
];

export default function MapView() {
  return (
    <MapContainer center={[35.0116, 135.7681]} zoom={13} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {sentoData.map((sento, index) => (
        <Marker key={index} position={sento.position} icon={redIcon}>
          <Popup>{sento.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

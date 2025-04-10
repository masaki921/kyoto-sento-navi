'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { LatLngTuple } from 'leaflet';

const redIcon = new L.Icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// 銭湯データ：必要に応じてここにどんどん追加できます
const sentoData: {
  name: string;
  position: LatLngTuple;
  address: string;
  hours: string;
}[] = [
  {
    name: 'サウナの梅湯',
    position: [35.0026, 135.7621],
    address: '京都市下京区木屋町通り松原下ル',
    hours: '14:00〜26:00（火曜定休）',
  },
  {
    name: '白山湯 高瀬川店',
    position: [34.9938, 135.7662],
    address: '京都市下京区高瀬川筋通',
    hours: '15:00〜23:00（木曜定休）',
  },
  {
    name: '船岡温泉',
    position: [35.0366, 135.7417],
    address: '京都市北区紫野南舟岡町',
    hours: '15:00〜25:00（水曜定休）',
  },
  {
    name: '旭湯',
    position: [35.0263, 135.7485],
    address: '京都市上京区一条通御前通西入',
    hours: '14:30〜23:30（木曜定休）',
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
          <Popup>
            <strong>{sento.name}</strong>
            <br />
            {sento.address}
            <br />
            営業時間：{sento.hours}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

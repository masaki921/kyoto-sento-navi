// app/map.tsx
'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapView = dynamic(() => import('../components/MapView'), { ssr: false });

export default function MapPage() {
  return (
    <div className="py-8 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">地図で探す</h1>
      <MapView />
    </div>
  );
}

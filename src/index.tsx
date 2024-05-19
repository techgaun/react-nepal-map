import React from 'react';
import { MapContainer, TileLayer, GeoJSON, GeoJSONProps } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import nepalData from './nepal.geojson';
import { Feature, FeatureCollection } from 'geojson';
import { Layer, LeafletMouseEvent } from 'leaflet';

const onEachFeature = (feature: Feature, layer: Layer) => {
  layer.on({
    mouseover: (event: LeafletMouseEvent) => {
    },
    mouseout: (event: LeafletMouseEvent) => {
    },
    click: (event: LeafletMouseEvent) => {
      alert(feature.properties?.name);
    },
  });
};

const NepalMap: React.FC = () => {
  const geoJsonData: FeatureCollection = nepalData as FeatureCollection;

  return (
    <MapContainer center={[28.3949, 84.1240]} zoom={7} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      <GeoJSON data={geoJsonData} onEachFeature={onEachFeature as GeoJSONProps['onEachFeature']} />
    </MapContainer>
  );
};

export default NepalMap;

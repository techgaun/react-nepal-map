import * as React from 'react'
import { MapContainer, TileLayer, GeoJSON, GeoJSONProps } from 'react-leaflet'
import { Feature, FeatureCollection } from 'geojson'
import { Layer, LeafletMouseEvent } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import nepalGeoJSON from './nepal.geo.json'

const onEachFeature = (feature: Feature, layer: Layer) => {
  layer.on({
    mouseover: (_event: LeafletMouseEvent) => {
      layer.setStyle({
        weight: 2,
        color: '#666',
        fillOpacity: 0.7,
      });
    },
    mouseout: (_event: LeafletMouseEvent) => {
      layer.setStyle({
        weight: 1,
        color: '#3388ff',
        fillOpacity: 0.2,
      });
    },
    click: (_event: LeafletMouseEvent) => {
      alert(feature.properties?.name);
    },
  });
};

const NepalMap: React.FC = () => {
  const geoJsonData: FeatureCollection = nepalGeoJSON as FeatureCollection;

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

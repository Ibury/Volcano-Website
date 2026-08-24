import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  ImageOverlay
} from "react-leaflet";

import { useContext } from "react";

import { VolcanoContext }
from "../context/VolcanoContext";

import "leaflet/dist/leaflet.css";

import { useMap } from "react-leaflet";
import LegendPanel from "./LegendPanel";


function FlyTo({
  lat,
  lng
}: {
  lat: number;
  lng: number;
}) {

  const map = useMap();

  map.flyTo(
    [lat, lng],
    8
  );

  return null;
}

export default function VolcanoMap() {

  const { selectedVolcano, overlay } =
    useContext(VolcanoContext);

  console.log(overlay);

  const center =
    selectedVolcano
      ? [selectedVolcano.lat,
         selectedVolcano.lng]
      : [40, 14];

  return (
    <>
      <MapContainer
        center={center as [number,number]}
        zoom={5}
        style={{
          width:"100%",
          height:"100%"
        }}
      >


      <LayersControl position="topright">

        <LayersControl.BaseLayer
          checked
          name="Satellite"
        >
          <TileLayer
            attribution="Esri"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Map">
          <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </LayersControl.BaseLayer>
      
        <LayersControl.BaseLayer name="Topographic">
          <TileLayer 
            attribution="Esri" 
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>
      </LayersControl>

        {selectedVolcano && (
          <FlyTo
            lat={selectedVolcano.lat}
            lng={selectedVolcano.lng}
          />
        )
        }

        {selectedVolcano && (

          <Marker
            position={[
              selectedVolcano.lat,
              selectedVolcano.lng
            ]}
          >

            <Popup>
              {selectedVolcano.name}
            </Popup>

          </Marker>

        )}

        {overlay && (

          <ImageOverlay
            url={overlay.png}
            bounds={[
              [
                overlay.south,
                overlay.west
              ],
              [
                overlay.north,
                overlay.east
              ]
            ]}
            opacity={0.7}
          />
        )}

      </MapContainer>
      <LegendPanel />
    </>
  
  );

}

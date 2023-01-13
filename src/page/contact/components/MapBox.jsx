/* global kakao */
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

const MapBox = ({ position }) => {
  const [pointer, setPointer] = useState({
    lat: 37.5382759,
    lng: 126.9671591,
  });
  useEffect(() => {
    if (position) {
      setPointer({
        lat: 37.733574,
        lng: 126.5863,
      });
    } else {
      setPointer({
        lat: 37.5382759,
        lng: 126.9671591,
      });
    }
  }, [position]);

  return (
    <Map
      center={pointer}
      style={{ width: "100%", height: "360px", marginTop: "100px" }}
    >
      <MapMarker position={pointer}></MapMarker>
    </Map>
  );
};

export default MapBox;

/* global kakao */
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import { useRef } from "react";
const MapBox = ({ position }) => {
  const map_ref = useRef();
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
      level={2}
    >
      <MapMarker
        position={pointer}
        image={{
          src: "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MTFfOTYg/MDAxNDkxOTEyNzI0NDE0.lf8i78icId3ppRmHuSfZfD3R9IJd2c5e5fobDB4U_Scg.bax6tfO8rDk6VIneVqrIpSiu6hf3VCWp_Fo5Q87aKLEg.PNG.tkdgns3/google-maps-marker-for-residencelamontagne-hi.png?type=w800",
          size: {
            width: 30,
            height: 47,
          },
          options: {
            offset: {
              x: 0,
              y: 50,
            },
          },
        }}
      />
    </Map>
  );
};

export default MapBox;

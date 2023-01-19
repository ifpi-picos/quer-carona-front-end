import Image from "next/image";
import { useEffect, useState } from "react";
import Map, { LngLat, LngLatLike, Marker, useMap } from "react-map-gl";
import pin from "../assets/pin.jpg";
import "mapbox-gl/dist/mapbox-gl.css";
const MyMap = ({
  selectPlace,
  markers,
}: {
  selectPlace?: boolean;
  markers?: { lat?: number; lng?: number, color?: string }[];
}) => {
  const { map } = useMap();
  const [latitude, setLatitude] = useState(-7.0726537);
  const [longitude, setLongitude] = useState(-41.3997794);
  useEffect(() => {
    if (selectPlace) {
      map?.on("move", (ev) => {
        setLatitude(ev.target.getCenter().lat);
        setLongitude(ev.target.getCenter().lng);
      });
    }
  }, [map, selectPlace]);
  return (
    <Map
      id="map"
      initialViewState={{
        longitude: -41.3997794,
        latitude: -7.0726537,
        zoom: 14,
      }}
      attributionControl={false}
      style={{ width: "100%", maxHeight: "90%" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1IjoiZ3Vuc2JsYXppbiIsImEiOiJjbGNtcG00cjIwdG9nM29yMDE1enNpOXByIn0.Jjga3PH602hNS7V9iH0iJg"
    >
      {selectPlace ? (
        <Marker
          longitude={longitude}
          latitude={latitude}
          anchor="bottom"
        ></Marker>
      ) : (
        <div></div>
      )}
      {markers?.map((value, index) => (
        <Marker
          key={index}
          longitude={value.lng}
          latitude={value.lat}
          anchor="bottom"
          color={value.color}
        ></Marker>
      ))}
    </Map>
  );
};

export default MyMap;

import React, { useState, useContext } from "react";
import { ContactContext } from "../../context/ContactContext";
// const Map = React.lazy(() => import("react-map-gl"));
import Map from 'react-map-gl';

function MapView() {
  const [contacts, setContacts] = useContext(ContactContext);
  return (
    <div>
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
      ;
    </div>
  );
}

export default MapView;

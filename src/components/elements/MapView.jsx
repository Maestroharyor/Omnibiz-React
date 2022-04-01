import React, { useState, useContext } from "react";
import { ContactContext } from "../../context/ContactContext";
// const Map = React.lazy(() => import("react-map-gl"));
// import Map from 'react-map-gl';

function MapView() {
  const [contacts, setContacts] = useContext(ContactContext);
  return (
    <div>
      Map view
    </div>
  );
}

export default MapView;

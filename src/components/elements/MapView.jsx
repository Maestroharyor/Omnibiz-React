import React, { useState, useContext } from "react";
import { ContactContext } from "../../context/ContactContext";
// const Map = React.lazy(() => import("react-map-gl"));
// import Map from 'react-map-gl';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function MapView() {
  const [contacts, setContacts] = useContext(ContactContext);
  console.log(contacts)
  return (
    <div>
      <p className="view_snippet">Map View</p>
      <div>
        <ComposableMap
          projection="geoAlbers"
          projectionConfig={{
            scale: 800
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#DDD"
                  stroke="#FFF"
                />
              ))
            }
          </Geographies>
          {contacts.map((contact, index) => (
            <Marker coordinates={[Number(contact.longitude), Number(contact.latitude)]} fill="#777" key={`${contact.name}-${index}`}>
            <text textAnchor="middle" fill="#F53">
              {contact.name}
            </text>
          </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
}

export default MapView;

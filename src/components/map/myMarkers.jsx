import {Marker, Popup} from "react-leaflet";
import React from "react";
import basicMarkIcon from "./basicMarkIcon";


const AllMarkers = ({markers}) => {
    return (
        markers.map((marker) => (
            <Marker key={marker.key} position={marker.position} icon={basicMarkIcon}>
                <Popup>
                    {marker.popup}
                </Popup>
            </Marker>)
        ));
    // };
};

export default AllMarkers;


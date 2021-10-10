import React, {useState} from "react";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import AllMarkers from "./myMarkers";


/**
 * @param center {GpsCoordinate}
 * @param zoom {number}
 * @param markers {MapMarker[]}
 * @return {JSX.Element}
 * @constructor
 */
const CustomMap = ({center, zoom, markers}) => {
    // console.log("center: ", center)
    // console.log("zoom: ", zoom)
    // console.log("markers: ", markers)
    // const [markers, setMarkers] = useState([]);

    // const marker1 = [52.24520451421007, 21.054133239408895];
    // const center = [lat, lng];
    const centerLL = [center.latitude, center.longitude]
    const markersLL = markers.map(marker => {
        return {
            key: marker.key,
            position: [marker.gpsCoords.latitude, marker.gpsCoords.longitude],
            popup: marker.name
        }
    })

    return(
        // <div>
        // <MapContainer id="mapid" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        //     <TileLayer
        //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //     />
        //     <Marker position={[51.505, -0.09]}>
        //         <Popup>
        //             A pretty CSS3 popup. <br/> Easily customizable.
        //         </Popup>
        //     </Marker>
        // </MapContainer>
        // </div>

        <MapContainer id="mapid" center={centerLL} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AllMarkers markers = { markersLL }/>
        </MapContainer>
    )
};

export default CustomMap;

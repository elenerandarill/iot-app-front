import L from "leaflet";
import basic_marker from "../../media/basic_marker.svg";
import basic_marker_shadow from "../../media/basic_marker_shadow.svg";

const basicMarkIcon = L.icon({
    iconUrl: basic_marker,
    shadowUrl: basic_marker_shadow,
    iconAnchor: [25, 50],
    iconSize: [50, 50],
    popupAnchor: [0, -46],
    shadowAnchor: [5, 40],
    shadowSize: [40, 40],
    shadowBlur: [100, 50],
})

export default basicMarkIcon;
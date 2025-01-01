import { Marker, TileLayer, useMap, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useContext, useEffect } from "react";
import { Item, StateContext } from "./Reducer";
import {setCurrentMarker, setMarker, setOpen, setPosizione} from "./Action";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import { Box, CircularProgress } from "@mui/material";

export default function Mappa() {
    const [state, dispatch] = useContext(StateContext);
    const map = useMap();

    useMapEvents({
        click: (e) => {
            dispatch(setPosizione(e.latlng));
            map.flyTo(e.latlng, 10);
        }
    });

    useEffect(() => {
        dispatch(setOpen()); // Move setOpen outside of the then block

        fetch(`http://environment.data.gov.uk/flood-monitoring/id/stations?lat=${state.posizione.lat}&long=${state.posizione.lng}&dist=10`)
            .then((res) => res.json())
            .then((data) => {
                // Check if 'items' property exists in the response
                if (data.items) {
                    // Use map to iterate over items and dispatch setMarker action
                    data.items.forEach((item:any) => {
                        dispatch(setMarker({
                            id: item["@id"],
                            label: item.label,
                            lat: item.lat,
                            lng: item.long
                        }));
                    });
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            })
            .finally(() => dispatch(setOpen()));
    }, [state.posizione]);
    useEffect(() => {
        fetch(`https://environment.data.gov.uk/flood-monitoring/id/stations/${state.currentMarker.id}/measures`)
            .then(res=>res.json())
    }, []);
    console.log(state.listaMarkers);

    return (
        <>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {state.listaMarkers.map(item => (
                <Marker
                    key={item.id} // Make sure to include a key for each Marker
                    position={[item.lat, item.lng]}
                    icon={L.icon({
                        iconUrl: icon,
                        iconAnchor: [13, 40]
                    })}
                    riseOnHover={true}
                    riseOffset={250}
                    eventHandlers={{click:()=>(dispatch(setCurrentMarker(item)))}}
                />
            ))}
        </>
    );
}

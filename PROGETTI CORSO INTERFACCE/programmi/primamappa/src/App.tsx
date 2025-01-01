import React, {useEffect, useState} from 'react';
import { MapContainer, Marker, TileLayer, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import LocationMarker from "./map";
function Map() {
    // Define custom icon
    const customIcon = new L.Icon({
        iconUrl,
        iconAnchor: [13, 40],
        popupAnchor: [0, -40],
        shadowUrl,
        shadowSize: [40, 40],
        shadowAnchor: [13, 40],
    });


    return (
        <MapContainer center={[45.06467, 7.656784]} zoom={12} style={{ height: '100vh' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker icon={customIcon} position={[45.06, 7.65]}>
                <Tooltip>Borgo San Paolo</Tooltip>
                <Popup>
                    <h3>Che merda il computer di Alby</h3>
                </Popup>
            </Marker>
            <LocationMarker/>
        </MapContainer>
    );
}



function MouseStatus() {
    const [isMoving, setMoving] = useState(false);

    const onMouseMove = () => setMoving(true);

    useEffect(() => {
        if (!isMoving) return;

        const timeout = setTimeout(() => setMoving(false), 500);

        return () => clearTimeout(timeout);
    }, [isMoving]);

    return (
        <div onMouseMove={onMouseMove} style={{ backgroundColor: isMoving ? '#abdaff' : 'transparent' }}>
            <h2>The mouse is {!isMoving && 'not'} moving: {isMoving ? '✓' : '✗'}</h2>
        </div>
    );
}

function App() {
    return (
        <div>
            <MouseStatus/>
        </div>
    );
}




export default App;

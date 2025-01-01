import React, { useState } from 'react';
import { Marker, Tooltip, useMap, useMapEvents } from 'react-leaflet';
import { LatLng, LeafletMouseEvent } from 'leaflet';

function LocationMarker() {
    const [position, setPosition] = useState<LatLng>(new LatLng(0, 0));
    const map = useMap();

    useMapEvents({
        click: (e: LeafletMouseEvent) => {
            const ll = e.latlng;
            setPosition(ll);
            map.flyTo(ll);
        },
    });

    return (
        <Marker position={position}>
            <Tooltip>{`Lat: ${position.lat.toFixed(6)}, Lng: ${position.lng.toFixed(6)}`}</Tooltip>
        </Marker>
    );
}

export default LocationMarker;

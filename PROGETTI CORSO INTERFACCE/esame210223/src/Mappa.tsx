import {Marker, TileLayer, useMap, useMapEvents} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import {useContext, useEffect, useState} from "react";
import {StateContext} from "./Reducer";
import L, {LatLng} from "leaflet";
import {DynamicZoom, SetCurrentCrime} from "./Action";
import {Crimine} from "./Crimine";
import icon from "leaflet/dist/images/marker-icon.png";
import {useNavigate} from "react-router-dom";

function Mappa(){
    const [state,dispatch]=useContext(StateContext)
    const [lista,setLista]=useState<Crimine[]>([])
    const map=useMap()
    const navigate=useNavigate()
    useMapEvents({
        click:(e)=>(handleClick(e.latlng))

    })
    useEffect(() => {
        fetch(`https://data.police.uk/api/crimes-street/all-crime?lat=${state.posizione.lat}&lng=${state.posizione.lng}&date=${state.anno}-${state.mese}`)
            .then((res)=>(res.json()))
            .then(data=>setLista(data))

    }, [state]);
    function HandleEvent(crimine:Crimine){
        navigate("/specifiche")
        dispatch(SetCurrentCrime(crimine))

    }
    console.log(lista)
    function handleClick(pos:LatLng){
        dispatch(DynamicZoom(pos,lista))
        map.flyTo(pos,15)



    }
    return (<><TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {lista.map((elemento)=>(
        <Marker position={[Number(elemento.location.latitude),Number(elemento.location.longitude)]}
                icon={L.icon({ iconUrl: icon, iconAnchor: [13, 40] })} eventHandlers={{click:()=>HandleEvent(elemento)}}>

        </Marker>
    ))}
        </>

    )
}
export default Mappa
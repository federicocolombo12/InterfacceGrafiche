import {Marker, TileLayer, useMapEvents,Polyline,Circle,Popup,Rectangle} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import {Casa, ListaAppartamenti} from "./Casa";
import L, {LeafletMouseEvent, map,} from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import {useContext, useState} from "react";
import {StateContext} from "./reducer";
import {useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;
import {FilterPosizione, SetCurrentAppartamento} from "./Action";
import {Button,TextField,Slider} from "@mui/material"

function Mappa(){
    const [state,dispatch]=useContext(StateContext)
    const navigate=useNavigate()
    const [quadrato,setQuadrato]=useState<L.LatLng[]>([])
    const [center,setCenter]=useState<L.LatLng>(L.latLng(0,0))
    const [raggio,setRaggio]=useState(0.01)
    useMapEvents(
        {
            click: (e:LeafletMouseEvent)=>{
                const ll = e.latlng
                dispatch(FilterPosizione(ListaAppartamenti,ll,raggio))
                setQuadrato([
                    new L.LatLng(ll.lat - raggio,ll.lng - raggio),
                     new L.LatLng(ll.lat + raggio,ll.lng - raggio),
                    new L.LatLng(ll.lat + raggio,ll.lng + raggio),
                       new L.LatLng (ll.lat - raggio,ll.lng + raggio),
                    new L.LatLng(ll.lat - raggio,ll.lng - raggio)

                ])

                setCenter(ll)

            }
        }
    )

    function handleEvent(appartamento:Casa){
        navigate("/appartamento")
        dispatch(SetCurrentAppartamento(appartamento))


};
    const handleChange = (event: Event, newValue: number|number[]) => {

        setRaggio(newValue as number)
        setQuadrato([
            new L.LatLng(center.lat - raggio,center.lng - raggio),
            new L.LatLng(center.lat + raggio,center.lng - raggio),
            new L.LatLng(center.lat + raggio,center.lng + raggio),
            new L.LatLng (center.lat- raggio,center.lng + raggio),
            new L.LatLng(center.lat - raggio,center.lng - raggio)

        ])
        dispatch(FilterPosizione(ListaAppartamenti,center,raggio))
    }
    return (<>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {state.listaAppartamenti.map((appartemento)=>(
        <Marker position={appartemento.pos} icon={L.icon({ iconUrl: icon, iconAnchor: [13, 40] })}
        eventHandlers={{click:()=>handleEvent(appartemento)}}></Marker>
    ))}
            <Polyline positions={quadrato} color={"red"}>
                <Popup>
                    <Slider
                        defaultValue={0.05}
                        aria-label="Default"
                        valueLabelDisplay="on"
                        min={0}
                        max={0.1}
                        step={0.001}
                        onChange={handleChange}
                        value={raggio}/>

                </Popup>
            </Polyline>

        </>
    )

}
export default Mappa
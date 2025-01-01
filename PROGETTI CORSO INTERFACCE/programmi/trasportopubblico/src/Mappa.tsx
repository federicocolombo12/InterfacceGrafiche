import {Marker, TileLayer, useMap, useMapEvents} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import {StateContext, Stazione} from "./Reducer";
import {useContext} from "react";
import {nuovaLista, setStartingPoint} from "./Action";
import L, {control, LatLng} from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import zoom = control.zoom;
import {useNavigate} from "react-router-dom";
import L, {LeafletMouseEvent, map,} from "leaflet";

function Mappa(){
    const [state,dispatch]=useContext(StateContext)
    const map=useMap()
    const navigate=useNavigate()

    useMapEvents({click:(e)=>{
            fetch(`https://transport.opendata.ch/v1/locations?type=stations&x=${e.latlng.lat}&y=${e.latlng.lng}`)
                .then(res=>res.json())
                .then(data=>data.stations.filter((stazione:Stazione)=>(stazione.id!=null)))
                .then((filtered)=>dispatch(nuovaLista(filtered)))
            map.flyTo(e.latlng,13)
        }})
    console.log(state.listaStazioni)
    function handleClick(stazione:Stazione){
        dispatch(setStartingPoint(stazione))
        navigate("/seconda")

    }
    return (
        <>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {state.listaStazioni.map((stazione)=>(
        <Marker key={stazione.id} position={[stazione.coordinate.x,stazione.coordinate.y]}
                icon={L.icon({ iconUrl: icon, iconAnchor: [13, 40] })} eventHandlers={{click:()=>handleClick(stazione)}}/>
    ))}
        </>
)


}
export default Mappa
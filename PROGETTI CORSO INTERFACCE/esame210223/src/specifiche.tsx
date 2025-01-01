import {Card, CardContent, Stack, Typography} from "@mui/material";
import {useContext} from "react";
import {StateContext} from "./Reducer";
import {MapContainer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import Mappa from "./Mappa";

function Specifiche(){
    const [state,dispatch]=useContext(StateContext)
    return (
        <Stack sx={{display:"flex",alignItems:"center"}}>
            <Card sx={{ minWidth: 275}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {state.currentCrime.category}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {state.currentCrime.location_type}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {state.currentCrime.location_subtype}
                    </Typography>
                    <Typography variant="body2">
                        {state.currentCrime.month}
                        <br />
                        {state.currentCrime.location.street.name}
                        {state.currentCrime.location.latitude}
                        {state.currentCrime.location.longitude}
                    </Typography>
                </CardContent>
            </Card>
            <Stack>
            <MapContainer center={[Number(state.currentCrime.location.latitude),
                Number(state.currentCrime.location.longitude)]} style={{ width:"50vh",height:"70vh"}} zoom={20}>
                <Mappa/>
            </MapContainer>
            </Stack>
        </Stack>
    )
}
export default Specifiche
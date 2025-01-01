import {Box, Button, Card, CardActions, CardContent, CircularProgress, Stack, Typography} from "@mui/material";
import {MapContainer} from "react-leaflet";
import Mappa from "./Mappa";
import {useContext} from "react";
import {StateContext} from "./Reducer";

function PaginaPrincipale(){
    const [state,dispatch]=useContext(StateContext)
    return(<Stack direction={"row"}>
        <Stack sx={{flex:2}}>
        <MapContainer style={{height:"100vh"}} center={[54.5445, -4.0649]} zoom={6}>
            <Mappa/>
        </MapContainer>
        </Stack>
        <Stack sx={{flex:1}}>

            <Card sx={{ minWidth: 275}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {state.currentMarker.label}
                    </Typography>
                    {state.loading&&(<Box sx={{ display: 'flex' }}>
                        <CircularProgress/>
                    </Box>)}
                    <Typography variant="body2">
                        {state.currentMarker.lat}
                        <br />
                        {state.currentMarker.lng}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Stack>

    </Stack>)
}
export default PaginaPrincipale
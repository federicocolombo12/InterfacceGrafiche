import {
    AppBar,
    Box,
    Button,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import {MapContainer} from "react-leaflet";
import Mappa from "./Mappa";
import Elenco from "./Elenco";
import 'leaflet/dist/leaflet.css'
import Bottoneprezzomax from "./bottoneprezzomax";
import Bottoneprezzomin from "./bottoneprezzomin";
import BottoneEnergetica from "./bottoneEnergetica";
import BottonePiano from "./bottonePiano";
import BottoneTipo from "./bottoneTipo";
import BottoneLocali from "./bottoneLocali";


function PaginaPrincipale(){
    return(
        <Stack direction={"column"} sx={{height:"100vh", alignItems:"stretch"}} >
            <Stack sx={{ flex:1}} direction={"column"} spacing={1} >
                <AppBar position="static">
                    <Toolbar>


                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Immobiliare
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

                <Toolbar >
                    <Bottoneprezzomin/>
                    <Bottoneprezzomax/>

                    <BottoneTipo/>
                    <BottoneEnergetica/>
                    <BottonePiano/>
                    <BottoneLocali/>


                </Toolbar>

            </Stack>
        <Stack direction={"row"} >



            <Box sx={{flex:1.5}}>
                <Elenco/>
            </Box>

            <MapContainer style={{flex:2, height:"100vh"}} center={[53.33189115613609, -2.9848009279439744]} zoom={10}>
                <Mappa/>
            </MapContainer>

        </Stack>
        </Stack>
    )
}
export default PaginaPrincipale
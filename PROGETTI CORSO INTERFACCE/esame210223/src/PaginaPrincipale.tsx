import {
    AppBar,
    Button,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import {MapContainer} from "react-leaflet";
import Mappa from "./Mappa";
import {StateContext} from "./Reducer";
import {useContext, useEffect, useState} from "react";
import {SwitchMonth, SwitchYear} from "./Action";
import {LatLng} from "leaflet";
import {Crimine} from "./Crimine";
import {useNavigate} from "react-router-dom";

function PaginaPrincipale(){
    const [state,dispatch]=useContext(StateContext)
    const [lista,setLista]=useState<Crimine[]>([])
    const navigate=useNavigate()
    useEffect(() => {
        fetch(`https://data.police.uk/api/crimes-street/all-crime?lat=${state.posizione.lat}&lng=
        ${state.posizione.lng}&da te=${state.anno}-${state.mese}`)
            .then((res)=>(res.json()))
            .then(data=>setLista(data))

    }, [state]);
    function handleChange(value:number){
        dispatch(SwitchMonth(value))
    }
    function handleChange1(value:number){
        dispatch(SwitchYear(value))
    }
    function HandleEvent(){
        navigate("/descrizione")}
    return (<Stack direction={"column"}>
        <AppBar position="static" >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >

                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Casi Criminali
                </Typography>
                <FormControl fullWidth sx={{margin:"1em"}}>
                    <InputLabel id="demo-simple-select-label">Month</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="1"

                        label="Year"
                    >
                        <MenuItem value={1} onChange={()=>handleChange(1)}>gennaio</MenuItem>
                        <MenuItem value={2} onChange={()=>handleChange(2)}>febbraio</MenuItem>
                        <MenuItem value={3} onChange={()=>handleChange(3)}>Marzo</MenuItem>
                        <MenuItem value={4} onChange={()=>handleChange(4)}>Aprile</MenuItem>
                        <MenuItem value={5} onChange={()=>handleChange(5)}>Maggio</MenuItem>
                        <MenuItem value={6} onChange={()=>handleChange(6)}>Giugno</MenuItem>
                        <MenuItem value={7} onChange={()=>handleChange(7)}>Luglio</MenuItem>
                        <MenuItem value={8} onChange={()=>handleChange(8)}>Agosto</MenuItem>
                        <MenuItem value={9} onChange={()=>handleChange(9)}>Settembre</MenuItem>
                        <MenuItem value={10} onChange={()=>handleChange(10)}>Ottobre</MenuItem>
                        <MenuItem value={11} onChange={()=>handleChange(11)}>Novembre</MenuItem>
                        <MenuItem value={12} onChange={()=>handleChange(12)}>Dicembre</MenuItem>
                    </Select>
                </FormControl >
                <FormControl fullWidth sx={{margin:"1em"}}>
                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="1"

                        label="Year"
                    >
                        <MenuItem value={2020} onChange={()=>handleChange1(2020)}>2020</MenuItem>
                        <MenuItem value={2021} onChange={()=>handleChange1(2021)}>2021</MenuItem>
                        <MenuItem value={2022} onChange={()=>handleChange1(2022)}>2022</MenuItem>

                    </Select>
                </FormControl>
                <Button variant="contained" onClick={()=>HandleEvent}
                size={"medium"}>Statistiche</Button>
            </Toolbar>
        </AppBar>
        <Stack>
        <MapContainer style={{height:"100vh"}} center={[53.33189115613609, -2.9848009279439744]} zoom={8}>
            <Mappa/>
        </MapContainer>
        </Stack>
        </Stack>)
}
export default PaginaPrincipale
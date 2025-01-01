import {listamusei, MuseoProp} from "./MainPanel";
import {useNavigate} from "react-router-dom";
import {setCurrentMuseum} from "./reducer";
import {useContext} from "react";
import {StateContext} from "./state";
import Container from '@mui/material/Container';
import {Button, Typography, Stack} from "@mui/material";
function Elenco(){
    const navigate=useNavigate()
    const [state,dispatch]=useContext(StateContext)

    let handleClick1=useNavigate();
    function handleClick(museo:MuseoProp){
        navigate("/descrizione")
        dispatch(setCurrentMuseum(museo))

    };

    return (
       <Stack spacing={2}>
           <Button onClick={()=>(handleClick1("prenotazioni"))} variant="contained" color="secondary" size={"large"}>Lista Prenotazioni</Button>
           {listamusei.map((museo)=>
               (<Button onClick={()=>handleClick(museo)} variant="contained"size={"small"}
               sx={{mx:"10px" ,border:"solid 2px black" ,display:"flex", flexDirection:"column"}}>
                   <Typography variant={"h5"}>{museo.name} </Typography>
                   <Typography variant={"h6"}>{museo.position.lat} {museo.position.lng}</Typography>


               </Button> ))}
       </Stack>
   )
}
export default Elenco
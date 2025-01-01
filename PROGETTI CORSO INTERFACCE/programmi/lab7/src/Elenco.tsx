import {useContext} from "react";
import {StateContext} from "./reducer";
import {CardContent, Container, Stack, Card, CardActions, CardMedia, Typography, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {SetCurrentAppartamento} from "./Action";
import {Casa} from "./Casa";
import "./appartamentotorino.jpg"
function Elenco(){
    const [state,dispatch]=useContext(StateContext)
const navigate=useNavigate()
    function handleClick(appartamento:Casa) {
        navigate("/appartamento")
        dispatch(SetCurrentAppartamento(appartamento))
    }

    return (<Container  sx={{overflow: "scroll"}}>
        {state.listaAppartamenti.map((appartamento)=>
            <Card variant={"outlined"} sx={{flexDirection:"row", bgcolor:"lightblue"}}>
                <CardMedia
                    component="img"
                    height="194"
                    image={appartamento.foto}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant={"h4"} color={"primary"}>Prezzo:{appartamento.prezzo}</Typography>
                    <Typography variant={"h5"}>{appartamento.tipo} {appartamento.descrizione}</Typography>
                    <Typography variant={"h6"}>{appartamento.classe} Classe Energetica</Typography>
                    <Typography variant={"h6"}> {appartamento.piano}o Piano {appartamento.Area}</Typography>


                </CardContent>
                <CardActions>
                    <Button size="medium" variant={"contained"} onClick={()=>handleClick(appartamento)}>Info</Button>
                </CardActions>

            </Card>
        )}
        </Container>


    )
}
export default Elenco
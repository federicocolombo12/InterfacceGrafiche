import {useContext} from "react";
import {StateContext} from "./state";
import {
    Button,
    Typography,
    Stack,
    Container,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Box,
    AppBar, IconButton, Toolbar

} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function Descrizione(){
    const [state,dispatch]=useContext(StateContext)
    return (

            <Box sx={{ flexGrow: 1,  }} >
            <AppBar position="static">
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
                        Descrizione
                    </Typography>
                    <Button color="inherit" href={"/"}>Back</Button>
                </Toolbar>
            </AppBar>


        <Card sx={{
            textAlign:"center", mx:"10%", bgcolor:"primary.main",
        mt:1}} >
            <CardContent>
            <Typography variant={"h2"}>{state.currentMuseum.name}</Typography>
            <Typography variant="body1">
                {state.currentMuseum.descrizione}
            </Typography>
            </CardContent>
            <CardActions sx={{display:"flex", justifyContent:"center"}}>
                <Button href={"/raccoltadati"} variant="contained" size={"large"} color={"success"}>
                Prenota
            </Button>
                <Button href={"/"} variant={"contained"} color={"secondary"}>
                    Back
                </Button>
            </CardActions>

        </Card>
            </Box>

    )
}
export default Descrizione
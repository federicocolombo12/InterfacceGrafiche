import {
    AppBar,
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    IconButton,
    Stack, TextField,
    Toolbar,
    Typography
} from "@mui/material";
import {Fragment, useContext, useState} from "react";
import {Categoria, StateContext} from "./Reducer";
import {aggiungiCategoria, setCategoria} from "./Action";
import {useNavigate} from "react-router-dom";

function PaginaPrincipale(){
    const [state,dispatch]=useContext(StateContext)
    const [open, setOpen] = useState(false);
    const [nuovacategoria,setNuovacategoria]=useState("")
    let navigate=useNavigate()
    function handleClick(categoria:Categoria){
        navigate("/dettagli")
        dispatch(setCategoria(categoria))
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAdd=()=>
    {
        handleClose()
        dispatch(aggiungiCategoria({nome:nuovacategoria, listaspese:[],totspese:0}))
    }
    return (
        <Stack>
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
                        Sito Per Spese
                    </Typography>
                    <Fragment>
                        <Button variant="contained" onClick={handleClickOpen}>
                            Aggiungi Categoria
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}

                        >
                            <DialogTitle>Aggiungi</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Aggiungi una categoria di spese
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    required
                                    margin="dense"
                                    id="name"
                                    name="email"
                                    label="Nome"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={nuovacategoria}
                                    onChange={(e)=>setNuovacategoria(e.target.value)}
                                />

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit" onClick={()=>(handleAdd())} >Aggiungi</Button>
                            </DialogActions>
                        </Dialog>
                    </Fragment>
                </Toolbar>
            </AppBar>
            {state.listaCategorie.map((categoria)=>(<Card sx={{ minWidth: 275 }}>
                <CardContent>

                    <Typography variant="h5" component="div">
                        {categoria.nome}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>handleClick(categoria)}>Learn More</Button>
                </CardActions>
            </Card>))}
        </Stack>
    )
}
export default PaginaPrincipale
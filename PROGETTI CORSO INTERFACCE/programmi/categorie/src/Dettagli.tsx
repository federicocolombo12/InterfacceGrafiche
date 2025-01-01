import {
    AppBar,
    Button, Card, CardActions, CardContent,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    IconButton,
    Stack, TextField,
    Toolbar,
    Typography
} from "@mui/material";
import {Fragment, useContext, useState} from "react";
import {Categoria, Spesa, StateContext} from "./Reducer";
import {aggiungiCategoria, aggiungiSpesa, eliminaSpesa, setCategoria} from "./Action";

function Dettagli() {
    const [state,dispatch]=useContext(StateContext)
    const [data,setData]=useState("")
    const [descrizione,setDescrizione]=useState("")
    const [importo,setImporto]=useState(0)
    const [open, setOpen] = useState(false);
    function handleClick(spesa:Spesa){
        return(<Dialog
            open={open}
            onClose={handleClose}

        >
            <DialogTitle>Elimina</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Elimina una spesa
                </DialogContentText>


            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" onClick={()=>dispatch(eliminaSpesa(spesa, state.categoriaAttuale))} >Conferma Eliminazione</Button>
            </DialogActions>
        </Dialog>)

    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return<Stack>
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
                    {state.categoriaAttuale.nome}
                </Typography>
                <Fragment>
                    <Button variant="contained" onClick={handleClickOpen}>
                        Aggiungi Spesa
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}

                    >
                        <DialogTitle>Aggiungi</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Aggiungi una spesa
                            </DialogContentText>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="email"
                                type="date"
                                fullWidth
                                variant="standard"
                                value={data}
                                onChange={(e)=>setData(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="email"
                                label="Descrizione"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={descrizione}
                                onChange={(e)=>setDescrizione(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="email"
                                label="Number"
                                type="number"
                                fullWidth
                                variant="standard"
                                value={importo}
                                onChange={(e)=>setImporto(Number(e.target.value))}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" onClick={()=>dispatch(aggiungiSpesa({data, descrizione, importo}, state.categoriaAttuale))} >Aggiungi</Button>
                        </DialogActions>
                    </Dialog>
                </Fragment>
            </Toolbar>
        </AppBar>
        {state.categoriaAttuale.listaspese.map(spesa=>(<Card sx={{ minWidth: 275 }}>
                <CardContent>

                    <Typography variant="h5" component="div">
                        {spesa.data}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {spesa.descrizione}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {spesa.importo}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>handleClick(spesa)}>Elimina</Button>
                </CardActions>
            </Card>)
        )}
        {state.categoriaAttuale.totspese}
    </Stack>
}
export default Dettagli
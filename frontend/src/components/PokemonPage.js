import { Fab, LinearProgress, Typography, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import PageWithNavbar from "./PageWithNavbar";
import PokeBox from "./PokeBox";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { AppContext } from "../AppContextProvider";

export default function PokemonPage() {

    const { pokemon, catchPokemon, releaseAllPokemon, isLoading } = useContext(AppContext);
    const [id, setId] = React.useState('');

    return (
        <PageWithNavbar>
            <PokeBox contents={pokemon} />
            <Box mt={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                {isLoading && <LinearProgress sx={{ mr: 3, flexGrow: 1 }} />}
                <Typography variant="body1" sx={{lineHeight: 3}}>
                    (optional) Enter the pokemon number here (leave blank for random):
                        <TextField id="outlined-basic"
                            label="Pokemon ID"
                            variant="outlined"
                            style={{ marginRight: 50, width: 300 }} 
                            value={id}
                            type="number"
                            InputLabelProps={{shrink: true}}
                            onChange={e=>setId(e.target.value)}
                            />
                </Typography>
                <Fab disabled={isLoading} color="primary" aria-label="add" sx={{ mr: 1 }} onClick={() => catchPokemon(id)}>
                    <AddIcon />
                </Fab>
                <Fab disabled={isLoading} color="secondary" aria-label="release-all" onClick={() => releaseAllPokemon()}>
                    <DeleteForeverIcon />
                </Fab>
            </Box>
        </PageWithNavbar>
    )
}
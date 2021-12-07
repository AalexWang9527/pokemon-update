import axios from "axios";
import { useState } from "react";
import useGet from "./useGet";

export default function usePokemon() {

    const { data, refresh, isLoading } = useGet('/api/pokemon', []);

    const [inProgress, setInProgress] = useState(isLoading);




    function catchPokemon(id) {
        setInProgress(true);
        axios.post('/api/pokemon/newCatch',{key:id})
            .then(() => {
                refresh();
                setInProgress(false);
            });
    }

    function releaseAllPokemon() {
        setInProgress(true);
        axios.delete('/api/pokemon')
            .then(() => {
                refresh();
                setInProgress(false);
            });
    }

    return {
        pokemon: data,
        catchPokemon,
        releaseAllPokemon,
        isLoading: isLoading || inProgress
    };

}
import React from 'react';
import usePokemon from './hooks/usePokemon';

export const AppContext = React.createContext({
    pokemonBox: []
});

export function AppContextProvider({ children }) {

    const { pokemon, catchPokemon, releaseAllPokemon, isLoading } = usePokemon();

    return (
        <AppContext.Provider value={{ pokemon, catchPokemon, releaseAllPokemon, isLoading }}>
            {children}
        </AppContext.Provider>
    )
}
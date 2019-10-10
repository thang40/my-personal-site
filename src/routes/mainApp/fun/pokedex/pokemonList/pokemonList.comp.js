import React from "react";
import { Link } from "react-router-dom";
import { LoadingSpinner, ItemBar } from "../../../../../components";

export const PokemonList = ({ pokemons, isLoading }) => {
  const renderPokemonList = () => {
    if (isLoading) {
      return (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      );
    }
    return pokemons.map(pokemon => (
      <Link to={`/fun/pokedex/${pokemon.name}`} key={pokemon.name}>
        <ItemBar
          key={pokemon.name}
          imageSrc={pokemon.sprites.front_default}
          title={pokemon.name}
        />
      </Link>
    ));
  };
  return renderPokemonList();
};

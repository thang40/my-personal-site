import React, { useEffect, useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { initPokemonNameAction, searchPokemonAction } from "../../../ducks";
import { PokemonSearchbar } from "./pokemonSearchbar.comp";

const _FunPokedexRoute = ({ initPokemon, searchPokemon }) => {
  useEffect(() => {
    initPokemon();
  }, [initPokemon]);

  return (
    <div>
      <PokemonSearchbar handleSubmit={searchPokemon} />
    </div>
  );
};

export const FunPokedexRoute = connect(
  state => ({}),
  { initPokemon: initPokemonNameAction, searchPokemon: searchPokemonAction }
)(_FunPokedexRoute);

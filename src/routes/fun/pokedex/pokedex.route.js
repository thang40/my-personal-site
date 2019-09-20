import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import {
  initPokemonNameAction,
  searchPokemonAction,
  selectPokemonListView
} from "../../../ducks";
import { PokemonCard } from "../../../components";
import { PokemonSearchbar } from "./pokemonSearchbar.comp";

const _FunPokedexRoute = ({ initPokemon, searchPokemon, pokemons }) => {
  useEffect(() => {
    initPokemon();
  }, [initPokemon]);

  const renderPokemonCards = () => {
    return pokemons.map(pokemon => (
      <PokemonCard
        key={pokemon.name}
        name={pokemon.name}
        imageSrc={pokemon.sprites.front_default}
      ></PokemonCard>
    ));
  };
  return (
    <React.Fragment>
      <Row>
        <Col>
          <PokemonSearchbar handleChange={searchPokemon} />
        </Col>
      </Row>
      <Row>{renderPokemonCards()}</Row>
    </React.Fragment>
  );
};

export const FunPokedexRoute = connect(
  state => ({
    pokemons: selectPokemonListView(state)
  }),
  { initPokemon: initPokemonNameAction, searchPokemon: searchPokemonAction }
)(_FunPokedexRoute);

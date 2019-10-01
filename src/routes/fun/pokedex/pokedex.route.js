import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import {
  initPokemonNameAction,
  searchPokemonAction,
  selectPokemonListView
} from "../../../ducks";
import { ItemBar, SearchBar } from "../../../components";
// import styles from "./pokedex-route.module.css";

const _FunPokedexRoute = ({ initPokemon, searchPokemon, pokemons }) => {
  useEffect(() => {
    initPokemon();
  }, [initPokemon]);

  const renderPokemonCards = () => {
    return pokemons.map((pokemon, index) => (
      <ItemBar
        key={index}
        imageSrc={pokemon.sprites.front_default}
        title={pokemon.name}
      />
    ));
  };
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <SearchBar handleChange={searchPokemon} />
        </Col>
        <Col lg={12}>{renderPokemonCards()}</Col>
      </Row>
    </React.Fragment>
  );
};

export const FunPokedexRoute = connect(
  state => ({
    pokemons: selectPokemonListView(state)
  }),
  { initPokemon: initPokemonNameAction, searchPokemon: searchPokemonAction }
)(_FunPokedexRoute);

import React, { useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { connect } from "react-redux";
import {
  initPokemonNameAction,
  searchPokemonAction,
  selectPokemonListView
} from "../../../ducks";
import { ProgressiveImage } from "../../../components";
import { PokemonSearchbar } from "./pokemonSearchbar.comp";
import styles from "./pokedex-route.module.css";

const _FunPokedexRoute = ({ initPokemon, searchPokemon, pokemons }) => {
  useEffect(() => {
    initPokemon();
  }, [initPokemon]);

  const renderPokemonCards = () => {
    return pokemons.map((pokemon, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>
          <ProgressiveImage
            className={styles["pokemon-image"]}
            src={pokemon.sprites.front_default}
          />
        </td>
        <td>{pokemon.name}</td>
      </tr>
    ));
  };
  return (
    <React.Fragment>
      <Row>
        <Col>
          <PokemonSearchbar handleChange={searchPokemon} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table size="sm" id={styles["pokemon-table"]} hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>{renderPokemonCards()}</tbody>
          </Table>
        </Col>
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

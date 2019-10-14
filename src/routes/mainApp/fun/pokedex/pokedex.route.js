import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  searchPokemonAction,
  selectPokemonListView,
  selectIsLoading,
  selectErrorMsg
} from "../../../../ducks";
import { PokemonDetails } from "./pokemonDetails/pokemonDetails.route";
import { SearchBar } from "../../../../components";
import { PokemonList } from "./pokemonList/pokemonList.comp";
import { languageContext } from "../../../../contexts";
// import styles from "./pokedex-route.module.css";

const _FunPokedexRoute = ({ searchPokemon, pokemons, isLoading, errorMsg }) => {
  console.log(errorMsg);
  const { translate } = useContext(languageContext);
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <SearchBar
            handleChange={searchPokemon}
            placeholder={translate("Search")}
          />
        </Col>
        <Col lg={12}>
          {errorMsg.length ? (
            <div className="text-center">{translate(errorMsg)}</div>
          ) : (
            <React.Fragment>
              <Route
                exact
                path="/fun/pokedex"
                render={() => (
                  <PokemonList pokemons={pokemons} isLoading={isLoading} />
                )}
              />
              <Route path="/fun/pokedex/:name" component={PokemonDetails} />
            </React.Fragment>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export const FunPokedexRoute = connect(
  state => ({
    pokemons: selectPokemonListView(state),
    isLoading: selectIsLoading(state),
    errorMsg: selectErrorMsg(state)
  }),
  { searchPokemon: searchPokemonAction }
)(_FunPokedexRoute);

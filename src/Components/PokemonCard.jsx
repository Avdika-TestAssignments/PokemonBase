import React from 'react';

import { Container, PokemonCardBody, TitleText, CommonText, Image } from '../Styles/pokemonCardStyled';

const PokemonCard = (props) => {
  const id = props.url ? props.url.match(/\d+/g)[1] : props.id;
  const height = props.height ? (<CommonText>Height:  {props.height}</CommonText>) : null;
  const weight = props.weight ? (<CommonText>Weight:  {props.weight}</CommonText>) : null;

  const Species = () => {
    const { species } = props;

    if (species && Array.isArray(species)) {
      const speciesString = 'Species:';
      const reducedString = species.reduce(function (totalString, specie, index) {
        if (index === (species.length - 1)) {
          totalString += specie.name;
        } else {
          totalString += specie.name + `, `;
        }
        return totalString;
      }, speciesString)

      const res = (<CommonText>{reducedString}</CommonText>);

      return res;
    } else {
      return species ? (<CommonText>Species: {species.name}</CommonText>) : null;
    }
  }

  const Stats = () => {
    const { stats } = props;

    if (stats && Array.isArray(stats)) {
      const statsString = 'Stats:';
      const reducedString = stats.reduce(function (totalString, stat, index) {
        if (index === (stats.length - 1)) {
          totalString += stat.stat.name + ` = ` + stat.base_stat;
        } else {
          totalString += stat.stat.name + ` = ` + stat.base_stat + `, `;
        }
        return totalString;
      }, statsString)

      const res = (<CommonText>{reducedString}</CommonText>);

      return res;
    } else {
      return stats ? (<CommonText>Stats: {stats.name}</CommonText>) : null;
    }
  }

  const Types = () => {
    const { types } = props;

    if (types && Array.isArray(types)) {
      const typesString = 'Types:';
      const reducedString = types.reduce(function (totalString, type, index) {
        if (index === (types.length - 1)) {
          totalString += type.type.name;
        } else {
          totalString += type.type.name + `, `;
        }
        return totalString;
      }, typesString)

      const res = (<CommonText>{reducedString}</CommonText>);

      return res;
    } else {
      return types ? (<CommonText>Stats: {types.name}</CommonText>) : null;
    }
  }

  const Moves = () => {
    const { moves } = props;

    if (moves && Array.isArray(moves)) {
      const movesString = 'Moves:';
      const reducedString = moves.reduce(function (totalString, move, index) {
        if (index === (moves.length - 1)) {
          totalString += move.move.name;
        } else {
          totalString += move.move.name + `, `;
        }
        return totalString;
      }, movesString)

      const res = (<CommonText>{reducedString}</CommonText>);

      return res;
    } else {
      return moves ? (<CommonText>Stats: {moves.name}</CommonText>) : null;
    }
  }

  return (
    <Container className="card">
      <Image src={props.sprites?.front_shiny} alt={props.name} />
      <PokemonCardBody
        onClick={() => props.openDetail(id)}>
        <TitleText>id: {id}</TitleText>
        <TitleText >Name: {props.name}</TitleText>
        {height}
        {weight}
        {<Species />}
        {<Stats />}
        {<Types />}
        {<Moves />}
      </PokemonCardBody>
    </Container>
  )
}

export default PokemonCard;

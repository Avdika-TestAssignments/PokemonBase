import React from 'react';

import PokemonCard from './PokemonCard';
import { Container } from '../Styles/pokemonListStyled';

const PokemonList = ({ items, openDetail }) => {

  return (
    <Container>
      {items.map(item => (
        <PokemonCard
          key={item.index}
          id={item.id || item.url}
          name={item.name}
          url={item.url || null}
          height={item.height || null}
          weight={item.weight || null}
          sprites={item.sprites || null}
          species={item.species || null}
          stats={item.stats || null}
          types={item.types || null}
          moves={item.moves || null}
          openDetail={openDetail}
        />
      ))}
    </Container>
  )
}

export default PokemonList;

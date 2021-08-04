import React, { useState } from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

import { Container } from '../Styles/homeStyled';
import SearchForm from './SearchForm';
import PokemonsList from './PokemonsList';
import Spinner from './Spinner';
import NotFound from './NotFound';
import CountButton from './CountButton';
import { URL } from '../Config/constants';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [emptySearch, setEmptySearch] = useState(false);
  const [count, setCount] = useState(0);
  const [pagesNumber, setPagesNumber] = useState('')

  const handleResult = result => {
    let results = result.data.results ? result.data.results : result.data;

    setPagesNumber(Math.ceil((result.data.count) / 16));

    if (!Array.isArray(results)) {
      results = [results];
    }
    setPokemons(results);
    setEmptySearch(results.length === 0);
  };

  const searchPokemons = (value) => {
    setPokemons([]);
    const keyword = (value === '') ? '' : '/' + value;
    const offset = count * 16;

    trackPromise(
      axios
        .get(`${URL}${keyword}?offset=${offset}&limit=16`)
        .then(result => handleResult(result))
        .catch((error) => {
          console.log('we have received an error: ', error);
        }));
  };

  const changeCounter = counter => {
    return new Promise((resolve, reject) => {
      setCount(counter);
      resolve(true);
    })
  }

  const decrementClick = (e) => {
    const counter = count > 0 ? count - 1 : 0;
    changeCounter(counter).then(() => searchPokemons(''));
  }

  const incrementClick = (e) => {
    const counter = count < pagesNumber ? count + 1 : 0;
    changeCounter(counter).then(() => searchPokemons(''));
  }

  return (
    <Container>
      <SearchForm
        placeholder="Enter pokemon Name or id"
        buttonText="Search"
        onSubmit={value => searchPokemons(value)}
      />
      {emptySearch && (<NotFound />)}
      <Spinner />
      <PokemonsList items={pokemons} openDetail={searchPokemons} />
      {pokemons?.length !== 1 && pokemons?.length !== 0 && (<>
        <CountButton buttonText="&lt;" handleClick={decrementClick} />
        <p>{count} of {pagesNumber}</p>
        <CountButton buttonText="&gt;" handleClick={incrementClick} />
      </>)}
    </Container>
  )
}

export default Home;

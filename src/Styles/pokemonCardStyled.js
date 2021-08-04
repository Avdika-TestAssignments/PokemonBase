import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  flex-basis: 15%;
  margin: 15px;
  border: solid 2px #3a3a3a;
  border-radius: 5px;
`;

export const PokemonCardBody = styled.div`
  padding: 10px;
`;

export const TitleText = styled.h1`
  font-size: 15px;
  text-align: left;
`;

export const CommonText = styled.p`
  font-size: 12px;
  text-align: left;
`;

export const Image = styled.img`
  float: left;
  width: 150px;
  height: auto;
  object-fit: cover;
`;
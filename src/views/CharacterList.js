import React from 'react';
import { fetchCharacters } from '../services/fetchCharacters';

export default function CharacterList({ characters, series }) {
  fetchCharacters();

  return (
    <>
      <h3>Characters from {series} </h3>
      <ul>
        {characters.map((character) => (
          <li key={`${character.stand_type}-${character.Stand}`}>
            {character.Stand}
          </li>
        ))}
      </ul>
    </>
  );
}

import React from 'react';
import { fetchCharacters } from '../services/fetchCharacters';

export default function CharacterList({ characters }) {
  fetchCharacters();

  return (
    <>
      <div>CharacterList</div>
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

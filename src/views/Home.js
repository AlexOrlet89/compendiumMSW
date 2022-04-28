import React from 'react';
import Filter from '../components/Filter';
import CharacterList from './CharacterList';

export default function Home({ characters }) {
  return (
    <div>
      <h1>Characters</h1>
      <Filter />
      <CharacterList characters={characters} />
    </div>
  );
}

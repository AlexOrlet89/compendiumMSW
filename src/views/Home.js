import React, { useState } from 'react';
import Filter from '../components/Filter';
import CharacterList from './CharacterList';

export default function Home({ characters, setSeries, series }) {
  //   const [series, setSeries] = useState('StardustCrusaders');

  return (
    <div>
      <h1>Characters from </h1>
      <Filter setSeries={setSeries} />
      <CharacterList characters={characters} series={series} />
    </div>
  );
}

import React, { useState } from 'react';
import Filter from '../components/Filter';
import CharacterList from './CharacterList';

export default function Home({ characters, setSeries, series }) {
  //   const [series, setSeries] = useState('StardustCrusaders');

  return (
    <div>
      <Filter setSeries={setSeries} />
      <CharacterList characters={characters} series={series} />
    </div>
  );
}

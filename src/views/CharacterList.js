import React from 'react';
import { fetchCharacters } from '../services/fetchCharacters';

export default function CharacterList() {
  fetchCharacters();

  return <div>CharacterList</div>;
}

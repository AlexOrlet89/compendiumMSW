import { useEffect, useState } from 'react';
import {
  fetchCharacters,
  fetchFilteredCharacters,
} from './services/fetchCharacters';
import Home from './views/Home';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [series, setSeries] = useState('StardustCrusaders');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFilteredCharacters(series);
        setCharacters(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [series]);

  // console.log(characters);

  return (
    <>
      <h1>Hello World</h1>
      <Home characters={characters} setSeries={setSeries} series={series} />
    </>
  );
}

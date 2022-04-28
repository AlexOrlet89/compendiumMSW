import { useEffect, useState } from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import Home from './views/Home';

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { StardustCrusaders, DiamondIsUnbreakable, GoldenWind } =
          await fetchCharacters();
        // console.log(data);
        setCharacters([
          ...StardustCrusaders,
          ...DiamondIsUnbreakable,
          ...GoldenWind,
        ]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  console.log(characters);

  return (
    <>
      <h1>Hello World</h1>;
      <Home />
    </>
  );
}

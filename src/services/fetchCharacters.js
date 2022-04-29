export async function fetchCharacters() {
  const response = await fetch(
    `https://jojoapi.herokuapp.com/StardustCrusaders`
  );
  const data = await response.json();
  //   console.log('response', response);
  //   console.log('data', data);
  //   console.log(data.results);
  return data;
}
export async function fetchFilteredCharacters(series) {
  const response = await fetch(`https://jojoapi.herokuapp.com/${series}`);
  const data = await response.json();
  //   console.log('response', response);
  //   console.log('data', data);
  //   console.log(data.results);
  return data;
}

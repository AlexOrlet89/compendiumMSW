export async function fetchCharacters() {
  const response = await fetch(`https://jojoapi.herokuapp.com/`);
  const data = await response.json();
  console.log('response', response);
  console.log('data', data);
  console.log(data.results);
  return data.results;
}

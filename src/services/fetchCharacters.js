export async function fetchCharacters(series) {
  console.log(series);
  const response = await fetch(`https://jojoapi.herokuapp.com/${series}`);
  const data = await response.json();
  //   console.log('response', response);
  //   console.log('data', data);
  //   console.log(data.results);
  return data;
}

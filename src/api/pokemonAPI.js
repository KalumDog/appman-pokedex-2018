import qs from 'querystring'

const POKEMONLIST_ENDPINT = 'http://localhost:3030/api/cards'

export const getPokemonList = (name, type, limit = 30) => {
  const pokemonListUrl = `${POKEMONLIST_ENDPINT}?${qs.stringify({ name, type, limit })}`
  console.log('pokemonListUrl', pokemonListUrl)
  return fetch(pokemonListUrl)
  .then((response) => {
    return Object.freeze(response.json())
  })
  .then((data) => {
    return data.cards.slice(0, limit) || []
  });
}
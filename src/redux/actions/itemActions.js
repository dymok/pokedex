import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAIL,
  SET_POKEMON,
  GET_EVOLUTION_FORMS_REQUEST,
  GET_EVOLUTION_FORMS_SUCCESS,
  GET_EVOLUTION_FORMS_FAIL,
  SET_EVOLUTION_FORMS
} from '../constants/itemConstants'

function setPokemon(data) {
  console.log('before setPokemon: ', data)
  /*
  const pokemons = data.results.map(pokemon => {
    let { url } = pokemon
    pokemon.id = url.substring(34, url.length - 1)

    return pokemon
  })
  */

  return {
    type: SET_POKEMON,
    payload: data
  }
}

function setForms(data) {
  console.log('before setPokemon: ', data)
  /*
  const pokemons = data.results.map(pokemon => {
    let { url } = pokemon
    pokemon.id = url.substring(34, url.length - 1)

    return pokemon
  })
  */

  return {
    type: SET_EVOLUTION_FORMS,
    payload: data
  }
}

export function getPokemon(name) {
  return dispatch => {
    dispatch({
      type: GET_POKEMON_REQUEST
    })

    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(`${response.status}: ${response.statusText}`)
      })
      .then(data => {
        dispatch({
          type: GET_POKEMON_SUCCESS
        })
        dispatch(setPokemon(data))
      })
      .catch(error => {
        dispatch({
          type: GET_POKEMON_FAIL,
          payload: error.message
        })
      })
  }
}

export function getForms(id) {
  return dispatch => {
    dispatch({
      type: GET_EVOLUTION_FORMS_REQUEST
    })

    return fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(`${response.status}: ${response.statusText}`)
      })
      .then(data => {
        dispatch({
          type: GET_EVOLUTION_FORMS_SUCCESS
        })
        dispatch(setForms(data))
      })
      .catch(error => {
        dispatch({
          type: GET_EVOLUTION_FORMS_FAIL,
          payload: error.message
        })
      })
  }
}

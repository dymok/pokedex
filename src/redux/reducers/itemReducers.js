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

const initialState = {
  isFetched: false,
  isFormsFetched: false,
  error: null,
  pokemon: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_REQUEST:
      return {
        ...state,
        isFetched: true
      }

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        isFetched: false
      }

    case GET_POKEMON_FAIL:
      return {
        ...state,
        isFetched: false,
        error: action.payload
      }

    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload
      }

    case GET_EVOLUTION_FORMS_REQUEST:
      return {
        ...state,
        isFormsFetched: true
      }

    case GET_EVOLUTION_FORMS_SUCCESS:
      return {
        ...state,
        isFormsFetched: false
      }

    case GET_EVOLUTION_FORMS_FAIL:
      return {
        ...state,
        isFormsFetched: false,
        error: action.payload
      }
    case SET_EVOLUTION_FORMS:
      return {
        ...state,
        forms: action.payload
      }
    default:
      return state
  }
}

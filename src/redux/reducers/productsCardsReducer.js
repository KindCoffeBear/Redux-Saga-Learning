/* eslint-disable default-param-last */
import { ADD_NEW_CARD, GET_ALL_CARDS } from '../actionTypes/productsCardsTypes'
import state from '../state'

const productsCardsReducer = (store = state, action) => {
  switch (action.type) {
    case GET_ALL_CARDS:
      return action.payload

    case ADD_NEW_CARD:
      return [...store, action.payload]

    default:
      return store
  }
}

export default productsCardsReducer

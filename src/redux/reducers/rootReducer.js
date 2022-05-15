import { combineReducers } from 'redux'
import productsCardsReducer from './productsCardsReducer'

const rootReducer = combineReducers({
  productsCards: productsCardsReducer,
})

export default rootReducer

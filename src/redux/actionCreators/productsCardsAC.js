/* eslint-disable import/prefer-default-export */
import { GET_ALL_CARDS } from '../actionTypes/productsCardsTypes'

export const getAllCards = (dataFromServer) => ({
  type: GET_ALL_CARDS,
  payload: dataFromServer,
})

export const getAllCardsQuery = () => ({ type: 'GET_CARD_REQUEST' })

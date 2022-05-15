import { call, put, takeEvery } from 'redux-saga/effects'
import { TOKEN } from '../constants/constants'
import { getAllCards } from './actionCreators/productsCardsAC'

function* fetchCardsAsync() {
  const data = yield call(() => fetch('https://api.react-learning.ru/products', {
    headers: {
      authorization: `Bearer ${TOKEN}`,
    },
  })
    .then((res) => res.json()))
  yield put(getAllCards(data))
}

function* watchFetchCards() {
  yield takeEvery('GET_CARD_REQUEST', fetchCardsAsync)
}

export default watchFetchCards

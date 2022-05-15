import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import App from './App'
import rootReducer from './redux/reducers/rootReducer'
import watchFetchCards from './redux/sagas'

const root = ReactDOM.createRoot(document.getElementById('root'))

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
))

sagaMiddleware.run(watchFetchCards)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

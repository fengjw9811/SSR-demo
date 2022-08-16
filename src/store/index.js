// eslint-disable-next-line camelcase
import { legacy_createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

export default function createStoreInstance (preloadState = {}) {
  return legacy_createStore(reducer, preloadState, applyMiddleware(thunk))
}

import { combineReducers } from 'redux'
import locationReducer from './location'

import loading from './storeData/reducers/loading'
import pages from './storeData/reducers/pages'
import posts from './storeData/reducers/posts'
import jobs from './storeData/reducers/jobs'
import featured from './storeData/reducers/featured'
import favorites from './storeData/reducers/favorites'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers,
    posts,
    pages,
    jobs,
    favorites,
    featured,
    loading
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer

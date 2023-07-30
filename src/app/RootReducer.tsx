/**
 * The root reducer for the Redux store.
 * Combines all reducers into a single reducer function.
 * @module RootReducer
 */

import { combineReducers } from 'redux';
import favoritesReducer from '../features/favorites/reducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import favoritesReducer from '../features/favorites/reducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;

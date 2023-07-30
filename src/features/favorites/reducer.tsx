import { ADD_TO_FAVORITES, AddToFavoritesAction } from './actions';
import { FavoritesState } from './types';

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesReducer = (
  state = initialState,
  action: AddToFavoritesAction,
): FavoritesState => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.product],
      };
    default:
      return state;
  }
};

export default favoritesReducer;

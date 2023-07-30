import {
  ADD_TO_FAVORITES,
  AddToFavoritesAction,
  REMOVE_FROM_FAVORITES,
  RemoveFromFavoritesAction,
} from './actions';
import { FavoritesState } from './types';

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesReducer = (
  state = initialState,
  action: AddToFavoritesAction | RemoveFromFavoritesAction,
): FavoritesState => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.product],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.name !== action.product.name,
        ),
      };
    default:
      return state;
  }
};

export default favoritesReducer;

import {
  ADD_TO_FAVORITES,
  AddToFavoritesAction,
  REMOVE_FROM_FAVORITES,
  RemoveFromFavoritesAction,
  INCREMENT_FAVORITES_COUNT,
  IncrementFavoritesCountAction,
} from './actions';
import { FavoritesState } from '../types';

/**
 * The initial state of the favorites reducer.
 */
const initialState: FavoritesState = {
  favorites: [],
  favoritesCount: {},
};

/**
 * The favorites reducer function.
 * @param state The current state of the reducer.
 * @param action The action to be performed on the state.
 * @returns The new state of the reducer.
 */
const favoritesReducer = (
  state = initialState,
  action:
    | AddToFavoritesAction
    | RemoveFromFavoritesAction
    | IncrementFavoritesCountAction,
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
    case INCREMENT_FAVORITES_COUNT:
      return {
        ...state,
        favoritesCount: {
          ...state.favoritesCount,
          [action.product.name]:
            (state.favoritesCount[action.product.name] || 0) + 1,
        },
      };
    default:
      return state;
  }
};

export default favoritesReducer;

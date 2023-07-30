// /features/favorites/actions.ts
import { FavoriteProduct } from './types';

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

export interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  product: FavoriteProduct;
}

export const addToFavorites = (
  product: FavoriteProduct,
): AddToFavoritesAction => ({
  type: ADD_TO_FAVORITES,
  product,
});

// /features/favorites/actions.ts
import { FavoriteProduct } from './types';

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

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

export interface RemoveFromFavoritesAction {
  type: typeof REMOVE_FROM_FAVORITES;
  product: FavoriteProduct;
}

export const removeFromFavorites = (
  product: FavoriteProduct,
): RemoveFromFavoritesAction => ({
  type: REMOVE_FROM_FAVORITES,
  product,
});

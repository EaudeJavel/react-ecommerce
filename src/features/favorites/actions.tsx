/**
 * This file contains the actions related to the favorites feature.
 */
import { FavoriteProduct } from './types';

/**
 * Action type constant for adding a product to favorites.
 */
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

/**
 * Action type constant for removing a product from favorites.
 */
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

/**
 * Interface for the action of adding a product to favorites.
 */
export interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  product: FavoriteProduct;
}

/**
 * Action creator for adding a product to favorites.
 * @param product - The product to be added to favorites.
 * @returns The action of adding a product to favorites.
 */
export const addToFavorites = (
  product: FavoriteProduct,
): AddToFavoritesAction => ({
  type: ADD_TO_FAVORITES,
  product,
});

/**
 * Interface for the action of removing a product from favorites.
 */
export interface RemoveFromFavoritesAction {
  type: typeof REMOVE_FROM_FAVORITES;
  product: FavoriteProduct;
}

/**
 * Action creator for removing a product from favorites.
 * @param product - The product to be removed from favorites.
 * @returns The action of removing a product from favorites.
 */
export const removeFromFavorites = (
  product: FavoriteProduct,
): RemoveFromFavoritesAction => ({
  type: REMOVE_FROM_FAVORITES,
  product,
});

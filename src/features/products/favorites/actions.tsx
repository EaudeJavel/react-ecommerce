import { Dispatch } from 'redux';
import { RootState } from '@/app/store';
import { ProductData } from '../types';
import { ThunkAction } from '@reduxjs/toolkit';

// Define the action type constants
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const INCREMENT_FAVORITES_COUNT = 'INCREMENT_FAVORITES_COUNT';

/**
 * Interface for the action of adding a product to favorites.
 */
export interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  product: ProductData;
}

/**
 * Interface for the action of removing a product from favorites.
 */
export interface RemoveFromFavoritesAction {
  type: typeof REMOVE_FROM_FAVORITES;
  product: ProductData;
}

// Define the interface for the action of incrementing the favorites count
export interface IncrementFavoritesCountAction {
  type: typeof INCREMENT_FAVORITES_COUNT;
  product: ProductData;
}

// Define the union type for all possible actions related to the favorites feature
export type FavoritesAction =
  | AddToFavoritesAction
  | RemoveFromFavoritesAction
  | IncrementFavoritesCountAction;

/**
 * Action creator for adding a product to favorites.
 * @param product - The product to be added to favorites.
 * @returns The action of adding a product to favorites.
 */
export const addToFavorites = (
  product: ProductData,
): ThunkAction<void, RootState, unknown, FavoritesAction> => {
  return (dispatch: Dispatch<FavoritesAction>, getState: () => RootState) => {
    const favorites = getState().favorites;

    const existingProduct = favorites.find(
      (item: ProductData) => item.name === product.name,
    );
    if (existingProduct) {
      // Product is already in favorites list, dispatch incrementFavoritesCount action
      console.log(
        'Product is already in favorites list, dispatch incrementFavoritesCount action',
      );
      dispatch(incrementFavoritesCount(product));
    } else {
      // Product is not in favorites list, add it and set favoritesCount to 1
      console.log(
        'Product is not in favorites list, add it and set favoritesCount to 1',
      );

      dispatch({
        type: ADD_TO_FAVORITES,
        product,
      });
      // Assuming you have an action creator for incrementFavoritesCount
      dispatch(incrementFavoritesCount(product));
    }
  };
};

/**
 * Action creator for removing a product from favorites.
 * @param product - The product to be removed from favorites.
 * @returns The action of removing a product from favorites.
 */
export const removeFromFavorites = (
  product: ProductData,
): RemoveFromFavoritesAction => ({
  type: REMOVE_FROM_FAVORITES,
  product,
});

/**
 * Action creator for incrementing the favorites count.
 * @param product - The name of the product to increment the count for.
 * @returns The action of incrementing the favorites count.
 */
export const incrementFavoritesCount = (
  product: ProductData,
): IncrementFavoritesCountAction => ({
  type: INCREMENT_FAVORITES_COUNT,
  product,
});

/**
 * This file exports a Redux store that manages the user's favorite products.
 * It uses the `configureStore` and `createSlice` functions from the `@reduxjs/toolkit` package.
 * The store contains a `favorites` slice that has two reducers: `addFavorite` and `deleteFavorite`.
 * The `addFavorite` reducer adds a new favorite product to the state, while the `deleteFavorite` reducer removes a favorite product from the state.
 * The `RootState` and `AppDispatch` types are inferred from the store itself.
 */
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteProduct {
  name: string;
  price: number;
  imageSrc: string;
}

interface FavoritesState {
  favorites: FavoriteProduct[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteProduct>) => {
      state.favorites.push(action.payload);
    },
    deleteFavorite: (state, action: PayloadAction<FavoriteProduct>) => {
      state.favorites = state.favorites.filter(
        (product) => product.name !== action.payload.name,
      );
    },
  },
});

const store = configureStore({
  reducer: favoritesSlice.reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {favorites: FavoritesState}
export type AppDispatch = typeof store.dispatch;
export const { addFavorite } = favoritesSlice.actions;
export const { deleteFavorite } = favoritesSlice.actions;
export default store;

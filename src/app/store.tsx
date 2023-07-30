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
export default store;

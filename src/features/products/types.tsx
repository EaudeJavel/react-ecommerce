/**
 * Represents the data of a product.
 */
export interface ProductData {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
  isFavorite: boolean;
}

// Define the type for the state
export type ProductState = ProductData[];

// // Initial state
// export const initialState: ProductState = [];

// Define the type for the favorites state
export interface FavoritesState {
  favorites: ProductData[];
  // favoritesCount: { [name: string]: number };
}

export const initialState: FavoritesState = {
  favorites: [],
  // favoritesCount: {},
};

// /features/favorites/types.ts

// Define the type for the product data used in the favorites feature
export interface FavoriteProduct {
  name: string;
  price: number;
  imageSrc: string;
}

// Define the type for the favorites state
export interface FavoritesState {
  favorites: FavoriteProduct[];
}

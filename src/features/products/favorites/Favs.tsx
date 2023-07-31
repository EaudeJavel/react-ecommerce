import { useDispatch, useSelector } from 'react-redux';
import { FavoritesState, ProductData } from '../types';
import { deleteFavorite } from '@/app/store';
import Header from '../../navigation/Header';
import Product from '../Product';

/**
 * FavoritesList component displays a list of favorite products and allows the user to remove them.
 * @returns a React component that displays a list of favorite products and allows the user to remove them.
 */
const FavoritesList = () => {
  const favorites = useSelector((state: FavoritesState) => state.favorites);
  const dispatch = useDispatch();

  const handleDeleteFavorite = (product: ProductData) => {
    const confirmed = window.confirm(
      'Are you sure you want to remove this product from your favorites?',
    );
    if (confirmed) {
      dispatch(deleteFavorite(product));
    }
  };

  return (
    <div>
      <Header />
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>You have no favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((product) => (
            <li key={product.id}>
              <Product {...product} />
              <button onClick={() => handleDeleteFavorite(product)}>
                Remove from favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;

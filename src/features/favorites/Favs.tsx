import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FavoritesState, FavoriteProduct } from './types';
import { deleteFavorite } from '@/app/store';
import Header from '../navigation/Header';

const FavoritesList = () => {
  const favorites = useSelector((state: FavoritesState) => state.favorites);
  const dispatch = useDispatch();

  const handleDeleteFavorite = (product: FavoriteProduct) => {
    dispatch(deleteFavorite(product));
  };

  console.log(favorites);

  return (
    <div>
      <Header />
      <h2>Favorites</h2>
      {favorites.map((product) => (
        <div key={product.name}>
          <p>{product.name}</p>
          <button onClick={() => handleDeleteFavorite(product)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;

import { useSelector } from 'react-redux';
import { FavoritesState } from './types';

// Inside your favorites component
const FavoritesList = () => {
  const favorites = useSelector((state: FavoritesState) => state.favorites);
  console.log(favorites);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((product) => (
        <div key={product.name}>
          <p>{product.name}</p>
          {/* Render your favorite product information here */}
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;

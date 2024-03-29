import type React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '@/app/store';
import { ProductData } from './types';
/**
 * Represents a product component.
 * @param id - The id of the product.
 * @param name - The name of the product.
 * @param price - The price of the product.
 * @param imageSrc - The image source of the product.
 * @param isFavorite - The boolean value of the product.
 */
const Product: React.FC<ProductData> = ({
  id,
  name,
  price,
  imageSrc,
  isFavorite,
}) => {
  const favorites = useSelector((state: ProductData) => state.name);
  const dispatch = useDispatch();

  /**
   * Handles adding the product to favorites.
   */
  const handleAddToFavs = () => {
    const product = { id, name, price, imageSrc, isFavorite };

    if (favorites) {
      dispatch(deleteFavorite(product));
    } else {
      dispatch(addFavorite(product));
    }
  };
  return (
    <div
      key={id}
      className="relative border border-gray-900 p-4"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: 400,
      }}
    >
      <div className="relative z-10">
        <h3 className="mb-2 text-lg font-bold">{name}</h3>
        <p className="mb-2 text-gray-700">${price.toFixed(2)}</p>
      </div>
      <div className="absolute right-4 top-4 z-20">
        <button
          onClick={handleAddToFavs}
          className="flex h-14 items-center justify-center bg-blue-500 font-bold text-white hover:bg-blue-700"
        >
          {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <button className="w-full bg-gray-200 px-4 py-2 font-bold outline hover:bg-green-700">
          Quick shop
        </button>
      </div>
    </div>
  );
};

export default Product;

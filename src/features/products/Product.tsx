import type React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '@/app/store';

/**
 * Represents the data of a product.
 */
export interface ProductData {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
}

interface ProductProps extends ProductData {}

/**
 * Represents a product component.
 * @param name - The name of the product.
 * @param price - The price of the product.
 * @param imageSrc - The image source of the product.
 */
const Product: React.FC<ProductProps> = ({ name, price, imageSrc }) => {
  const dispatch = useDispatch();

  /**
   * Handles adding the product to favorites.
   */
  const handleAddToFavs = () => {
    const product = { name, price, imageSrc };
    dispatch(addFavorite(product));
  };

  return (
    <div
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
          add to favs &lt;3
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

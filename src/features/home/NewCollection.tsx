import React from 'react';
import Product from '../products/Product';
import { ProductData } from '../products/types';

/**
 * Component that displays the new collection of products.
 */
const NewCollection: React.FC = () => {
  const products: ProductData[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      imageSrc: 'https://via.placeholder.com/400',
      isFavorite: false,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      imageSrc: 'https://via.placeholder.com/400',
      isFavorite: false,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      imageSrc: 'https://via.placeholder.com/400',
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 49.99,
      imageSrc: 'https://via.placeholder.com/400',
      isFavorite: false,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 59.99,
      imageSrc: 'https://via.placeholder.com/400',
      isFavorite: false,
    },
    {
      id: 6,
      name: 'Product 6',
      price: 69.99,
      imageSrc: 'https://via.placeholder.com/400',
      isFavorite: false,
    },
    {
      id: 7,
      name: 'Product 7',
      price: 79.99,
      imageSrc: 'https://via.placeholder.com/400',
      isFavorite: false,
    },
    {
      id: 8,
      name: 'Product 8',
      price: 89.99,
      imageSrc: 'https://via.placeholder.com/400',
      isFavorite: false,
    },
  ];

  return (
    <section className="mx-5 outline">
      <h2 className="text-center outline">New Collection</h2>
      <div className="grid grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default NewCollection;

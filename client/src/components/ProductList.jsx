import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const { selectedCategory } = useSelector((state) => state.categories);
  const { isLoggedIn } = useSelector((state) => state.user);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h2>Our Products:</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} isLoggedIn={isLoggedIn} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
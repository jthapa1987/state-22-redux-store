import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { addOrder } from '../features/user/userSlice';
import { updateProductStock } from '../features/products/productsSlice';

const ProductItem = ({ product, isLoggedIn }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product.stock > 0) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
      }));
      
      dispatch(updateProductStock({
        id: product.id,
        newStock: product.stock - 1,
      }));
      
      // If user is logged in, add to order history
      if (isLoggedIn) {
        dispatch(addOrder({
          items: [product],
          total: product.price,
        }));
      }
    }
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '15px',
    }}>
      <h3>{product.name}</h3>
      <p>{product.stock} items in stock</p>
      <p>${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        disabled={product.stock === 0}
        style={{
          backgroundColor: product.stock > 0 ? '#28a745' : '#ccc',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          cursor: product.stock > 0 ? 'pointer' : 'not-allowed',
        }}
      >
        {product.stock > 0 ? 'Add to cart' : 'Out of stock'}
      </button>
    </div>
  );
};

export default ProductItem;
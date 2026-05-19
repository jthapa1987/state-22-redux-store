import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../features/categories/categoriesSlice';

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state.categories);

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category === selectedCategory ? null : category));
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <h2>Choose a Category:</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '15px' }}>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              style={{
                backgroundColor: selectedCategory === category ? '#007bff' : '#f0f0f0',
                color: selectedCategory === category ? 'white' : 'black',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
import React from 'react';
import Navbar from './components/Navbar';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ padding: '20px' }}>
        <CategoryList />
        <ProductList />
      </main>
    </div>
  );
}

export default App;
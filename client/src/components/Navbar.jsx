import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/user/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const { totalQuantity } = useSelector((state) => state.cart);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <h1>Shop-Shop</h1>
      <div>
        {!isLoggedIn ? (
          <>
            <button style={{ marginRight: '10px' }}>Signup</button>
            <button>Login</button>
          </>
        ) : (
          <>
            <span style={{ marginRight: '10px' }}>Welcome, {user?.name || 'User'}!</span>
            <button style={{ marginRight: '10px' }}>Order History</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
        <span style={{ marginLeft: '20px' }}>🛒 Cart ({totalQuantity})</span>
      </div>
    </nav>
  );
};

export default Navbar;
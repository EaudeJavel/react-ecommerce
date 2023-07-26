import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '@/views/Profile';
import TranslationAnimation from './partials/TranslationAnimation';

const Header: React.FC = () => {
  return (
    <div>
      <div className="h-8 bg-neutral-700 text-white">
        <TranslationAnimation content="free shipping over 50€" />
      </div>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <ul
        //   style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}
        >
          <li>{/* <Link to="/">Home</Link> */}</li>
          <li>{/* <Link to="/products">Products</Link> */}</li>
          <li>{/* <Link to="/cart">Cart</Link> */}</li>
        </ul>
        <div>
          {/* <Link to="/login">Login</Link> */}
          {/* <Profile /> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;

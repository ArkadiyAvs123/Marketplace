import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* Add more links as needed */}
      </nav>
    </header>
  );
};

export default Header;

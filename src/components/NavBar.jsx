import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/topics/">
          <li>Topics</li>
        </Link>
        <Link to="/account/">
          <li>Account</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
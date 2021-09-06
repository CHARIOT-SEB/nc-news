import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul className="navbar">
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/topics/"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          <li>Topics</li>
        </NavLink>
        <NavLink
          to="/account/"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          <li>Account</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;

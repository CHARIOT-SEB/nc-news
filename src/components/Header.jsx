import { Link } from 'react-router-dom';
import logo from '../images/nc-logo.png';

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img className='nc-logo' src={logo} alt="logo" />
      </Link>
      <h1>NEWS</h1>
    </div>
  );
};

export default Header;

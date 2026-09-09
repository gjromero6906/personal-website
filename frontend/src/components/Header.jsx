import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/#top">
        <img src="/imgs/logo.svg" alt="logo" className="logo" />
      </Link>
      <nav>
        <Link to="/#Main">Home</Link>
        <Link to="/#About">About</Link>
        <Link to="/#Projects">Projects</Link>
        <Link to="/#Contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;

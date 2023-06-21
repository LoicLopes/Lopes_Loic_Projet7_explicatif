import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <nav>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/Apartment">
          <h2>Apt</h2>
        </Link>
        <Link to="/About">
          <h2>About</h2>
        </Link>
        <Link to="/Error">
          <h2>Error</h2>
        </Link>
      </nav>
    </div>
  )
}

export default Header

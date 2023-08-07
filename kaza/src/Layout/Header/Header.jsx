import { NavLink } from 'react-router-dom'
import logo from '../../assets/logos/logo.png'

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="Kasa"></img>
      </NavLink>
      <nav className="nav">
        <NavLink to="/" className="nav__link">
          Accueil
        </NavLink>
        <NavLink to="/About" className="nav__link">
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header

// Creation du fonction Header
// Qui Retourn
// Une balise Header avec un className pour le CSS
// Une balise Link pour que quand on click sur le logo on soit rediriger vers la page Home
// img insert le logo
// Un balise nav qui comporte 2 Link
// Le link Accueil renvoie vers la page Home
// Le Link A propros renvoie vers la page About

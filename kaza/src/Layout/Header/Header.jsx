// Importation de Link de react-router qui vas permettre de naviguer en attribuant le chemin des routes
import { Link } from 'react-router-dom'
// Importation du logo du dossier assets
import logo from '../../assets/logos/logo.png'

// Création de la fonction Header
function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Kasa"></img>
      </Link>
      <nav className="nav">
        <Link to="/" className="nav__link">
          Accueil
        </Link>
        <Link to="/About" className="nav__link">
          A propos
        </Link>
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

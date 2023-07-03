import { Link } from 'react-router-dom'
import error from '../../assets/images/404.png'

function ErrorPage() {
  return (
    <section className="error__page">
      <img src={error} alt="erreur 404" />
      <p> Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error__return">
        Retourner sur la page d'accueil
      </Link>
    </section>
  )
}

export default ErrorPage

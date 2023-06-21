import { Link } from 'react-router-dom'
import logo from '../../assets/logos/logofooter.png'
function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <Link to="/">
        <img className="footer__logo" src={logo} alt="Kasa"></img>
      </Link>
      <div className="footer__text">
        © {currentYear} Kasa. All rights reserved
      </div>
    </footer>
  )
}
export default Footer

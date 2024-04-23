import './TopNavigation.sass'
import logo from '/images/logo/default.png'
import {NavLink} from "react-router-dom";

function activeClass ({ isActive }: { isActive: boolean }) {
  return `nav__menu--link ${isActive ? 'active' : ''}`
}

export default function TopNavigation () {
  return <header className="nav">
    <img className="nav--logo" src={logo} alt={'Logo de Kasa'} />

    <nav className="nav__menu">
      <NavLink to="/" className={activeClass}>Accueil</NavLink>
      <NavLink to="/about" className={activeClass}>A Propos</NavLink>
    </nav>
  </header>
}

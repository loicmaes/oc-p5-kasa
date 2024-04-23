import './BottomCard.sass'
import logo from '/images/logo/white.png'

export default function BottomCard () {
  return <footer className="footer">
    <img className="footer--logo" src={logo} alt="" />
    <p className="footer--text">&copy; 2020 Kasa. All rights reserved</p>
  </footer>
}

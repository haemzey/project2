import { Link } from 'react-router-dom'
import '../styles/pages.css'

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link className="brand" to="/">MyFood</Link>
        <div className="links">
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/order">Order Menu</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login" className="auth">Login</Link>
          <Link to="/signup" className="auth primary">Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}

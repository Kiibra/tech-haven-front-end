// npm modules
import { NavLink } from 'react-router-dom'

//CSS
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  const publicLinks = (
    <ul>
      <li><NavLink to="/auth/login">Log In</NavLink></li>
      <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/devices">DEVICES</NavLink></li>
      <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar

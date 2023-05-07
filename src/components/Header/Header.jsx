import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className="navbar fixed-top bg-light">
        <div className="container">
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/menu" className="navbar-brand">Menu</Link>
        <Link to="/reservations" className="navbar-brand">Reservations</Link>
  </div>
</nav>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className="navbar fixed-top bg-light">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand">Inicio</Link>
        <Link to="/menu" className="navbar-brand">Menu</Link>
        <Link to="/reservas" className="navbar-brand">Reservas</Link>
  </div>
</nav>
    </div>
  )
}

export default Header
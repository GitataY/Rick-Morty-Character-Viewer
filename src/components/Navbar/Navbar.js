import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import '../../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
  <div className="container">
    <Link to='/' className="fs-3 fw-bold text-success navbar-brand" >
        Rick & Morty
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav fw-bold fs-5">
        <NavLink activeClassName ='active' to='/' className="nav-link">Characters</NavLink>
        <NavLink to='/episodes' className="nav-link" >Episodes</NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar

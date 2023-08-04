import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#">
      Navbar
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link"  to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            SignUp
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event">
            EventHandling
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/state">
            StateManagement
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/todo">
             Todo App
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/chat">
             Chat App
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
             Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/browse">
             Browse
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/addproduct">
             Add Product
          </NavLink>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Navbar
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useUserContext from '../UserContext'

const Navbar = () => {

const {LoggedIn, logout} = useUserContext();

const [currentUser, setcurrentUser] = useState(
  JSON.parse(sessionStorage.getItem('user'))
)

const showLoginOption=()=>{
  if(LoggedIn){
    return(
      <> <li className='nav-item'>
  <button onClick={logout} className='btn btn-danger'>Logout</button>
    </li>
    <li>
      <img width={40} height={40} className='ms-4 rounded-circle' src={"http://localhost:5000/"+currentUser.avatar} alt="" />
    </li>
    </>);

  }
  else{
    return(<>
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
    </>
  )
}
}


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
          <NavLink className="nav-link" to="/manageuser">
             Manage User
          </NavLink>
        </li>
      {showLoginOption()}
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
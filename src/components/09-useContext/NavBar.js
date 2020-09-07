import React from 'react'
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink 
        to="/" exact
        activeClassName="active" 
        className="navbar-brand" >useContext App</NavLink>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink 
          to="/login" exact
          activeClassName="active" 
          className="nav-item nav-link">Login</NavLink>
        <NavLink 
          to="/about" exact
          activeClassName="active" 
          className="nav-item nav-link">About</NavLink>
      </div>
    </div>
  </nav>
  )
}

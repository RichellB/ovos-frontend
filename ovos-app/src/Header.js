import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header(props){
  return(
    <div id="header">
      <h1>OVOS MUSIC LIBRARY</h1>
      <nav>
        <NavLink to="/cart">
          <button> View Cart </button>
        </NavLink>
        <NavLink to="/songs">
          <button> View Songs </button>
        </NavLink>
        <NavLink to="/songs/new">
          <button> Add a New Song</button>
        </NavLink>
        <NavLink to="/">
          <button> Home</button>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
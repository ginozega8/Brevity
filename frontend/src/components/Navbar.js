import React from 'react'
import {Link} from "react-router-dom"
const navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link to="/" className='nav-link'>QUOTES</Link>
        <Link to="/" className='nav-link'><i className='bx bxs-cuboid company-logo'></i></Link>
        <Link to="/CreateUser" className='nav-link'>CREATE</Link>
      </nav>
    </div>
  )
}

export default navbar
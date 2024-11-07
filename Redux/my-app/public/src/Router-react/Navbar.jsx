import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return <>
  <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <Link to="#"className='navbar-brand'>Ract-router dom</Link>  
      <div className='ml-auto' >
        <ul className='navbar-nav'>
          <li  className='nav-item'><Link to="/home" className='nav-link'>Home</Link></li>
          <li className='nav-item'><Link to="/about"  className='nav-link'>about</Link></li>
          <li className='nav-item'><Link to="/singup" className='nav-link'>singup </Link></li>
          <li className='nav-item' ><Link to="/login" className='nav-link'>login</Link></li>
        </ul>
      </div>
  </nav>
  </>
}

export default Navbar
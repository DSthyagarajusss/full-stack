import React from 'react'
import { Link } from 'react-router-dom'
function Navbar1() {
  return <>
    <nav className='navbar navbr-dark bg-dark navbar-expand-lg'>
        <Link to='/index' className='navbar-barnd'>React contactApp</Link>
        <div>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to='/ContactApp' className='nav-link'>ContactApp</Link>
                </li>
            </ul>
        </div>
    </nav>
  </>
}

export default Navbar1
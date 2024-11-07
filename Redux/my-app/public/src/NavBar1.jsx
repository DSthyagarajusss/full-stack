import React, { useState } from 'react'
import UseState from './React-Hooks/UseState'
import Product from './React-Hooks/Product'
function NavBar1() {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <a className='navbar-brand' href="#">React Hooks </a>
        <div className='ml-auto'>
          <ul className='navbar-nav'>
            <li  className='nav-item'><a href="UseState" element={UseState} className='nav-link'>UseState</a></li>
            <li  className='nav-item'><a href="Products" element={Product} className='nav-link'>Products</a></li>
          </ul>
        </div>
 </nav>
  )
}

export default NavBar1
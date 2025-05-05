import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        
    <Link class='btn btn-secondary' to='/' >Home</Link>
    <Link class='btn btn-secondary' to='/contact'>Contact</Link>
    <Link class='btn btn-secondary' to='/about'>About</Link>
    <Link class='btn btn-secondary' to='/login'>Login</Link>
    </div>
  )
}

export default Header
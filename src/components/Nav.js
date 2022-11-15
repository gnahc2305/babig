import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <nav className="nav">
            <h1>Babig</h1>
            <ul className='nav-links'>
              <Link to='/' style={{textDecoration: 'none'}}>
                <li>Inicio</li>
              </Link>
              <Link to='/fotos' style={{textDecoration: 'none'}}>
                <li>Fotos</li>
              </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Nav
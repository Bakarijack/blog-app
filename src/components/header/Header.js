import React from 'react'
import Logo from './mini_components/Logo'

const Header = () => {
  return (
    <header className='header'>
        <nav className='header-nav'>
          <Logo/>
        </nav>
    </header>
  )
}

export default Header
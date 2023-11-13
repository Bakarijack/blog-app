import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from './LogoImage'

const Logo = () => {
  return (
    <Link>
      <LogoImage/>
      Bloggify
    </Link>
  )
}

export default Logo
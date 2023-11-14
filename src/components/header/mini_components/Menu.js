import React from 'react'
import ToggleBtn from './ToggleBtn'
import DropDown from './DropDown'

const Menu = () => {
  return (
    <nav className='menu' >
      <ToggleBtn/>
      <DropDown/>
    </nav>
  )
}

export default Menu
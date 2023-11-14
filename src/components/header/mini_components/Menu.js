import React,{useState} from 'react'
import ToggleBtn from './ToggleBtn'
import DropDown from './DropDown'

const Menu = () => {
  const [show, setShow] = useState(false)

  const handleShow = (e) =>{
    setShow(!show)
  }

  return (
    <nav className={show? 'menu is-open':'menu'} >
      <ToggleBtn handleShow={handleShow}/>
      <DropDown/>
    </nav>
  )
}

export default Menu
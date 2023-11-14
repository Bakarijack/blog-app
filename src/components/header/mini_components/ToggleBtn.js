import React from 'react'

const ToggleBtn = ({handleShow}) => {
  return (
    <button onClick={handleShow} className='menu-toggle'>toggle menu</button>
  )
}

export default ToggleBtn
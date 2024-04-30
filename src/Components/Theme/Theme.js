import React from 'react'
import "./Theme.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Theme = () => {
  return (
    <span className='Bg-toggler'>
      <FontAwesomeIcon icon={faMoon} />
    </span>
  )
}

export default Theme

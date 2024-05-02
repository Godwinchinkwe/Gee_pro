import React from 'react'
import './Cards.css'

const Cards = ({classname, children}) => {
  return (
    <article className={`card ${classname}`}>
        {children}
    </article>
  )
}

export default Cards

import React from 'react'
import HeadingText from '../HeadingText/HeadingText'
import { tools } from '../../data/Data'
import './Tools.css'

const Tools = () => {
  return (
    <section className='tools'>
        <HeadingText title={'Work'} titlePrimary={'Tools'} />
        <div className='container tools-container'>
         {   
         tools.map(({id, img})=>{
                return(
                   <img src={img} key={id} alt=""/>
                )
            })
            }
        </div>
    </section>
  )
}

export default Tools

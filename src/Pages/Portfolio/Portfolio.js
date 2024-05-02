import React from 'react'
import './Portfolio.css'
import Cards from '../../UI/Cards'
import HeadingText from '../../Components/HeadingText/HeadingText'
import { portfolio} from '../../data/Data'
import Testimonials from '../../Components/Testimonials/Testimonials'


const Portfolio = () => {
  return (
    <>
    <section className='portfolio'>
      <HeadingText title={'Resent'} titlePrimary={'Work'} />

      <div className='container portfolio-container'>
        {
          portfolio.map(({id, img,name, des, github})=>{
            return(
              <Cards classname={'project'} key={id}>
                <img src={img} alt=""/>
                <h3>{name}</h3>
                <p>{des}</p>
                <a href={github}>Github</a>
              </Cards>
            )
          })
        }
      </div>
    </section>
    <Testimonials />
    </>
  )
}

export default Portfolio

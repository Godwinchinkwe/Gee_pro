import React from 'react'
import cv from '../../assets/CV.pdf'
import HeadingText from "../../Components/HeadingText/HeadingText"
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Cards from '../../UI/Cards'
import { experience } from "../../data/Data"
import Tools from '../../Components/Tools/Tools'
import Services from '../../Components/Services/Services'
import Education from '../../Components/Education/Education'

const About = () => {
  return (
    <>
    <section className='About'>
      <HeadingText title={'About'} titlePrimary={'Me'}/>

      <div className='container about-container'>
        <div className='about-left'>
          <h3> I'm Godwin Chinkwe</h3>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <a href={cv} download className='btn'>
            Download CV <span> <FontAwesomeIcon icon={faDownload}/> </span>
          </a>
        </div>
        <div className='about-right'>
          {
            experience.map(({id, no, title})=>{
              return(
                <Cards key={id} classname={'experience-card'}>
                  <h1><span>{no}</span></h1>
                  <p>{title}</p>
                </Cards>
              )
            })
          }
        </div>
      </div>
    </section>
    <Tools />
    <Services />
    <Education />
    </>
  )
}

export default About

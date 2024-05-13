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
          with a keen eye for design and a knack for crafting seamless user experiences. With 5 years of experience in the industry, I've had the privilege of working on a variety of projects, from small-scale startups to large-scale enterprise applications.
          </p>
          <p>
          My journey into the world of web development began with a love for creativity and problem-solving. I thrive on turning ideas into reality through clean, efficient code and intuitive interfaces. Whether it's building responsive websites, developing interactive web applications, or optimizing performance, I'm always up for a challenge. 
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

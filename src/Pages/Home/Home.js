import React from 'react'
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderImage from '../../assets/geeewin.jpg'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Typewriter from "typewriter-effect"


const Home = () => {
  return (
    <header>
      <div className='container container-lg header-container'>
        <img src={HeaderImage} alt='' />

        <div className='header-right'>
          <h1>
             Hi, I'm Godwin Chinkwe <br/>
             <span > I'm a Passionate <Typewriter options={{
                            strings : [ "Affiliate Marketer", "Seo Manager" , "Business Tycoon" , "Programmer" , "Youtuber" , "Designer", "Front-End Developer","Wordpress Developer", "Cool Website Developer", ],
                            loop: true,
                            autoStart:true,
                            typeSpeed: 100,
                            backSpeed: 80,
                            backDelay:1500,
                        }}/> </span>
          </h1>
          <p>
           with a keen eye for design and a knack for crafting seamless user experiences. With 5 years of experience in the industry, I've had the privilege of working on a variety of projects, from small-scale startups to large-scale enterprise applications.

           My journey into the world of web development began with a love for creativity and problem-solving. I thrive on turning ideas into reality through clean, efficient code and intuitive interfaces. Whether it's building responsive websites, developing interactive web applications, or optimizing performance, I'm always up for a challenge.
          </p>
          <Link className='btn' to={'/about'}>
            About Me
            <span> <FontAwesomeIcon icon={faArrowRight} /></span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Home

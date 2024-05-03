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
             <span > I'm a <Typewriter options={{
                            strings : [ "Affiliate Marketer", "Seo Manager" , "Business Tycoon" , "Programmer" , "Youtuber" , "Designer", "FrontEnd Developer","Wordpress Developer", "Cool Website Developer", ],
                            loop: true,
                            autoStart:true,
                            typeSpeed: 100,
                            backSpeed: 80,
                            backDelay:1500,
                        }}/> </span>
          </h1>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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

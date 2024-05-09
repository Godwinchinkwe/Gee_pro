import React from 'react'
import "./Works.css"
import Upwork from "../../assets/Upwork.png"
import Fiverr from "../../assets/fiverr.png"
import Amazon from "../../assets/amazon.png"
import Facebook from "../../assets/Facebook.png"
import Shopify from "../../assets/Shopify.png"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import HeadingText from '../HeadingText/HeadingText'


const Works = () => {

  const transition = { duration:3.5, type:"spring"} 


  return (
    <>
         <HeadingText title={'Clients '} titlePrimary={'Worked With'} />

    <div className='container works'>

        <div className='workawesome'>
            <span > Works for All these</span>
            <span> Brand & Clients</span>
            <span >
            Lets Make Something Amazing together start by Saying Hello 
              <br/>
              Get in touch  
               <br/>
             Contact Me 
            </span>
            <Link className='btn' to={'/contact'}>
            Hire Me
            <span> <FontAwesomeIcon icon={faArrowRight} /></span>
          </Link>
            <div className='blur s-blur1' style={{background:"#abf1ff94"}}></div>


        </div>
        <div className='w-right'>
          
          <motion.div
          
          initial={{rotate:45}}
          whileInView={{ rotate: 0 }}
          viewport={{margin:"-40px"}}
          transition={transition}

          className='w-mainCircle'>
            <div className="w-secCircle">
              <img src={Fiverr} alt=""/>
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt=""/>
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt=""/>
            </div>
            <div className="w-secCircle">
              <img src={Upwork} alt=""/>
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt=""/>
            </div>

          </motion.div>
          <div className='w-backCircle blueCircle'></div>
          <div className='w-backCircle yellowCircle'></div>


        </div>
    </div>
    </>
  )
}

export default Works

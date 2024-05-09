import { navContent } from '../../data/Data'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
// import React, { useState, useRef, } from 'react';



  export default function Nav() {

    const [ showmenu, setShowmenu] = useState(false);

    // const [isOpen, setIsOpen] = useState(false);
    // const navRef = useRef(null);

    const toggleNav = () => {
      setShowmenu(!showmenu);
    };

    // const handleClickOutside = (event) => {
    //   if (navRef.current && !navRef.current.contains(event.target)) {
    //     setShowmenu(false);
    //   }
    // };

    // useEffect(() => {
    //   document.addEventListener('mousedown', handleClickOutside);
    //   return () => {
    //     document.removeEventListener('mousedown', handleClickOutside);
    //   };
    // }, []);


    let MenuHandler=()=>{
    setShowmenu(!showmenu )
    }
  
  return (
    <nav>
     <ul className={`${showmenu ? 'navlinks navlinks-show' : 'navlinks'}`}>
         {
          navContent.map(({id, name, path, icon})=> {
            return(
              <li className='nav-item' key={id} >
                <NavLink  to={path} onClick={toggleNav} className={({isActive})=> isActive ? 'nav-link navlinksActive' : 'nav-link'}>
                  <span><FontAwesomeIcon icon={icon}/> </span>
                  <h3>{name}</h3>
                </NavLink>
              </li>
            )
          })
        } 
      </ul> 

       <div className={`${showmenu ? 'nav-toggle nav-close' : "nav-toggle" }`} onClick={MenuHandler}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  )
}

 
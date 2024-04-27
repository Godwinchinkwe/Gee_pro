// import React from 'react'
import { navContent } from '../../data/Data'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import {faHome, faEnvelope, faUserGraduate, faFolder} from '@fortawesome/free-solid-svg-icons'


  export default function Nav() {

  //  const navContent = [
  //     {
  //         id: 1,
  //         name: 'Home',
  //         icon: faHome,      
  //         path: '/'
  //     },
  //     {
  //         id: 2,
  //         name: `About`,
  //         icon : faUserGraduate,
  //         path: '/About'
  //     }, 
  //     {
  //         id: 3,
  //         name: 'Portfolio',
  //         icon : faFolder,
  //         path: '/portfolio'
  //     },
  //     {
  //         id: 4,
  //         name: 'Contact',
  //         icon : faEnvelope,
  //         path: '/Contact'
  //     },
  // ];

  
  return (
    <nav>
      <ul>
         {
          navContent.map(({id, name, path, icon})=> {
            return(
              <li className='nav-item' key={id}>
                <NavLink to={path}>
                  <span><FontAwesomeIcon icon={icon}/> </span>
                  <h3>{name}</h3>
                </NavLink>
              </li>
            )
          })
        } 
      </ul>
    </nav>
  )
}


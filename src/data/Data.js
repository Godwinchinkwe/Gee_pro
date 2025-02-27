import image1 from '../../src/assets/python.png'
import image2 from '../../src/assets/react.png'
import image3 from '../../src/assets/node.png'
import image4 from '../../src/assets/figma.png'
import image5 from '../../src/assets/ps.png'
import image6 from '../../src/assets/sketch.png'


import protfoliImg1 from '../../src/assets/p1.jpg'
import protfoliImg2 from '../../src/assets/p2.jpg'
import protfoliImg3 from '../../src/assets/p3.jpg'


import avatar1 from '../../src/assets/avatar1.png'
import avatar2 from '../../src/assets/avatar2.png'
import avatar3 from '../../src/assets/avatar3.png'
import avatar4 from '../../src/assets/avatar4.png'

import {faHome, faEnvelope, faUserGraduate, faFolder} from '@fortawesome/free-solid-svg-icons'

import {faCodeBranch, faCode,faCodeCompare,} from '@fortawesome/free-solid-svg-icons'




export const navContent = [
    {
        id: 1,
        name: 'Home',
        icon: faHome,       
        path: '/'
    },
    {
        id: 2,
        name: `About`,
        icon : faUserGraduate,
        path: '/About'
    }, 
    {
        id: 3,
        name: 'Portfolio',
        icon : faFolder,
        path: '/portfolio'
    },
    {
        id: 4,
        name: 'Contact',
        icon : faEnvelope,
        path: '/Contact'
    },
 
];



export const experience = [
    {
        id: 1,
        no: '3+',
        title:'Years Experience'
    },
    {
        id: 2,
        no: '15+',
        title:'Complete Projects'
    },
    {
        id: 3,
        no: '21+',
        title:'Happy Clientes'
    },
];


export const tools = [
    {
        id: 1,
        img: image1,
    },
    {
        id: 2,
        img: image2,
    },
    {
        id: 3,
        img: image3,
    },
    {
        id: 4,
        img: image4,
    },
    {
        id: 5,
        img: image5,
    },
    {
        id: 6,
        img: image6,
    },
];


export const services = [
    {
        id: 1,
        icon: faCode,
        name:'Web Development',
        des:'A technical professional who designs, build and maintains websites and web applications, using coding languages like HTML, CSS, and JavaScript to create the visual structure and functionalities of a site.'
    },
    {
        id: 2,
        icon: faCodeBranch,
        name:'Apps Development',
        des:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.'
    },
    {
        id: 3,
        icon: faCodeCompare,
        name:'Wordpress Developer',
        des:'.'
    },
    {
        id: 3,
        icon: faCodeCompare,
        name:'Video Editing',
        des:'.'
    },
    {
        id: 3,
        icon: faCodeCompare,
        name:'Content Creator',
        des:'.'
    },
    {
        id: 3,
        icon: faCodeCompare,
        name:'Graphics Designer',
        des:'.'
    },
];




export const portfolio = [
    {
        id: 1,
        img: protfoliImg1,
        name: 'Project-1',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github:'#',
    },
    {
        id: 1,
        img: protfoliImg2,
        name: 'Project-2',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github:'#',
    },
    {
        id: 1,
        img: protfoliImg3,
        name: 'Project-3',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github:'#',
    },
];




export const testimonials = [
    {
        id: 1,
        img: avatar1,
        name: 'Chris Eze',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',        
    },
    {
        id: 2,
        img: avatar2,
        name: 'Miracle Chinkwe',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',        
    },
    {
        id: 3,
        img: avatar3,
        name: 'Jhon Emmanuel',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',        
    },
    {
        id: 4,
        img: avatar4,
        name: 'Irfan Nazir',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.',        
    },
];

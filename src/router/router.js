import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contacts/Contact'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Nav from "../Components/Nav/Nav"
import Theme from "../Components/Theme/Theme"

const router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Theme />
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
     </Routes>
    </BrowserRouter>
    
  )
}

export default router


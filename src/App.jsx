import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Home from './component/home/Home'
import About from './component/about/About'
import Skills from './component/skills/Skills'
import Services from './component/services/Services'
import Qualification from './component/qualification/Qualification'
import Portfolio from './component/portfolio/Portfolio'
import Testimonial from './component/testimonials/Testimonial'
import Contact from './component/contact/Contact'
import Footer from "./component/footer/Footer"
import ScrollUp from './component/scrollup/ScrollUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Portfolio/>
      {/* <Testimonial/> */}
      <Contact/>
      
    </main>
    <Footer/>
    <ScrollUp/>
    </>
  )
}

export default App


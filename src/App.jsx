import { useState } from 'react'
import AboutMe from './AboutMe'
import reactLogo from './assets/react.svg'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Header } from './Header'
import { Nav } from './Nav'
import { Proyectos } from './Proyectos'
import { Skills } from './Skills'

function App() {

  return (
    <>
      <Nav />
      <Header />
      <AboutMe />
      <Proyectos />
      <Skills />
      <Contact />
      <Footer />
    </>

  )
}

export default App

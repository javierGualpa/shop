import React, { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'

import { NavMobile } from './NavMobile'


export const Nav = () => {

  const [openNav, setOpenNav] = useState(false)

  const handleNav = (e) => {
    e.preventDefault()
    setOpenNav(!openNav)
  }


  return (
    <nav className='p-5 bg-zinc-900 fixed w-full top-0 z-10'>
      {openNav ? <NavMobile /> : ''}
      <ul className=' gap-8 lg:flex justify-end text-white text-xl hidden'>
        <li><a href="#aboutme">Inicio</a></li>
        <li><a href="#aboutme">Acerca de mi</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contactme">Contactame</a></li>

      </ul>
      <ul>
        <li className='text-2xl text-white lg:hidden block self-end' onClick={handleNav}>
          <a href="">
            <GiHamburgerMenu className='' />
          </a>
        </li>
      </ul>
    </nav>
  )
}

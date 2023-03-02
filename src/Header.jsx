import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

export const Header = () => {
  return (
    <header className='min-h-screen flex flex-col  items-center justify-center gap-8 lg:gap-28 lg:flex-row mt-20 lg:mt-0 lg:p-20 md:p-10 sm:p-20 p-8 '>
      <div className='flex flex-col gap-6 lg:basis-1/2'>
        <h1 className='text-5xl text-p'>Hola soy <span className='font-medium'>Javier Gualpa</span></h1>
        <h2 className='text-4xl text-resaltar font-semibold'>Front-end Developer</h2>
        <p className='text-2xl text-p tracking-wider'> Bienvenido a mi portafolio , contácteme si tienes algún proyecto relacionado con el front-end con el que pueda ayudarte.</p>
        <div className='flex items-center gap-4 mt-10'>
          <a href="" className=' border border-zinc-600 text-zinc-300 bg-zinc-900  rounded px-8 py-2 hidden lg:block hover:bg-zinc-800 transition-all ease-out'>Contactame</a>
          <a href="" className='text-4xl text-blue-700'> <AiFillLinkedin /></a>
          <a href="" className='text-4xl text-black'> <AiFillGithub /></a>
        </div>
      </div>

      <div>
        <div className=' overflow-hidden'  >
          <img src="https://media.istockphoto.com/id/1219473617/es/vector/joven-personaje-masculino-escribiendo-c%C3%B3digo-en-una-computadora-de-escritorio-trabajando.jpg?s=612x612&w=0&k=20&c=LCYpGgRg-Y-U5DMSr6vIGEqlcINnxwsZ5XjM2yjYBos=" alt="" className='lg:w-[450px] md:w-[450px]' />
        </div>

      </div>
      <button className='border  w-32 rounded-sm py-2 text-slate-50 lg:hidden '>Contact Me</button>
      {/* <div className='flex gap-10'>
          <button className='border border-gray-400 px-5 py-1 rounded-lg'>About Me</button>
          <button className='border border-gray-400 px-5 py-1 rounded-lg'>Contact Me</button>
        </div>
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/1219473617/es/vector/joven-personaje-masculino-escribiendo-c%C3%B3digo-en-una-computadora-de-escritorio-trabajando.jpg?s=612x612&w=0&k=20&c=LCYpGgRg-Y-U5DMSr6vIGEqlcINnxwsZ5XjM2yjYBos=" alt="" />
      </div> */}
    </header>
  )
}

import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

export const Contact = () => {
  return (
    <section className=' flex flex-col mb-20 lg:p-20 p-8 sm:p-20  md:p-10 min-h-screen' id='contactme' >
      <h3 className='text-5xl mb-20 font-semibold text-p '>Contactame</h3>
      <div className=' flex '>
        <div className='text-4xl flex flex-row text-white  gap-8  lg:flex-col w-1/12' >
          <a href="https://www.linkedin.com/in/javier-gualpa-5b6b53208/" className='text-blue-700' target={'_blank'}><AiFillLinkedin /></a>
          <a href="https://github.com/javierGualpa" className='text-black' target={'_blank'}>
            <AiFillGithub />
          </a>

          <a href="https://twitter.com/JavierGualpa15" className='text-cyan-500' target={'_blank'}>
            <AiOutlineTwitter />
          </a>
        </div>

        <div className=' w-full   '>
          <form action="" className='flex flex-col gap-5'>
            <div className='flex gap-10'>
              <input type="text" placeholder='Nombre completo *' className='p-4' />
              <input type="text" placeholder='Direccion de Email' className='p-4 w-full' />
            </div>
            <input type="text" className='w-full p-4' placeholder='Tema...' />
            <textarea name="" id="" cols="30" rows="8" className='w-full' placeholder='Tu mensaje...'></textarea>
            <input type="submit" className=' bg-black text-white p-4 cursor-pointer' />
          </form>
        </div>



      </div>
    </section >
  )
}



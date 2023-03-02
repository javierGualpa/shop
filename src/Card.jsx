import React, { useState } from 'react'

import { ButtonCard } from './ButtonCard'
import './index.css'
import { AiFillGithub } from 'react-icons/ai'
import { BsLink45Deg } from 'react-icons/bs'


export const Card = ({ img, urlGit, urlDeploy, description, title }) => {

  const [openLink, setOpenLink] = useState(false)

  return (
    <>

      <div className='flex flex-col rounded-md overflow-hidden  shadow-md bg-zinc-800 md:w-80   ' onMouseEnter={() => setOpenLink(true)} onMouseLeave={() => setOpenLink(false)}>
        <div className='relative shadow-md cursor-pointer'>
          <img src={img} alt="" className='sm:w-[400px]' />
          {/* {openLink ? <ButtonCard urlGit={urlGit} urlDeploy={urlDeploy} /> : ''} */}
          <div className='absolute bg-zinc-900 bg-opacity-60 opacity-0 hover:opacity-100 top-0 text-center text-white h-full flex flex-col w-full  justify-center items-center gap-6'>
            <h3 className='text-3xl shrink'>TodoList</h3>
            <p>App para anotar tus tareas</p>
            <div className='flex gap-5'>
              <a href="" className='text-3xl'><AiFillGithub /></a>
              <a href="" className='text-3xl'><BsLink45Deg /></a>
            </div>
          </div>
        </div>
        {/* 
        <div className='p-4 flex flex-col gap-3 pb-8'>
          <h3 className='text-2xl text-zinc-300'>{title}</h3>

          <p className='text-zinc-400 '>{description}</p>
          <ButtonCard />
        </div> */}

      </div>

    </>


  )
}

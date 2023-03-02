import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { GrDeploy } from 'react-icons/gr'

export const ButtonCard = ({ urlGit, urlDeploy }) => {
  return (
    <div className='flex gap-5 mt-8'>
      <a href={urlGit} className=' text-black text-2xl hover:cursor-pointer hover:bg-zinc-500 py-1 flex items-center gap-2 bg-zinc-300  rounded-md px-4' target={'_blank'}><AiFillGithub /> <span className='text-lg'>Code</span></a>
      < a href={urlDeploy} className=' text-black text-2xl hover:cursor-pointer hover:bg-zinc-500 py-1 flex items-center gap-2 shadow-md  bg-zinc-300 font-normal rounded-md px-4' target={'_blank'} > <GrDeploy /> <span className='text-lg'>Deploy</span></ a>
    </div >
  )
}

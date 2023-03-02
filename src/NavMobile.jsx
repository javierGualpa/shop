import React from 'react'

export const NavMobile = () => {
  return (
    <div className='min-h-screen fixed bg-black w-full left-0 top-10 p-6'>
      <ul className='text-white flex text-xl flex-col gap-8'>
        <li className='hover:text-gray-400'>
          <a href="" className='w-full'>
            Home
          </a>
        </li>
        <li>
          <a href="" className='w-full'>
            AboutMe
          </a>
        </li>
        <li>
          <a href="">
            Proyects
          </a>
        </li>
        <li>
          <a href="">
            Skills
          </a>
        </li>
        <li>
          <a href="">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

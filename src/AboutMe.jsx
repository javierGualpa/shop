import React from 'react'
import perfil from './assets/img.png'


const AboutMe = () => {
  return (
    <section className='min-h-screen text-white flex flex-col p-8 gap-8 items-center justify-center lg:flex-row-reverse lg:p-20 md:p-10 sm:p-20' id='aboutme'>

      <div className='flex flex-col gap-10 lg:basis-1/2 lg:p-5'>
        <h2 className='text-5xl font-semibold text-title'>Sobre mi</h2>

        <p className='text-2xl text-p leading-relaxed tracking-wide'>Mi nombre es <span className=''> Javier Gualpa</span> , soy un apasionado de la tecnología y la programación, con una clara inclinación hacia el <span className='text-resaltar font-semibold'>desarrollo frontend</span>. Me encanta aprender sobre nuevas tendencias y tecnologías en el mundo de la programación, y siempre estoy buscando nuevos desafíos para aplicar mis habilidades y seguir creciendo.
          En mi tiempo libre, disfruto programando y creando proyectos personales.
        </p>
        <button className=' border border-zinc-600 text-zinc-300 bg-zinc-900  rounded px-8 py-2 hidden lg:block lg:w-52 hover:bg-zinc-800 transition-all ease-out'>Descargar CV</button>

      </div>
      <div className='p-2 overflow-hidden lg:basis-1/2'>
        <img src={perfil} alt="" className='lg:w-[350px] md:w-[400px] sm:w-[350px]' />
      </div>
      <button className='mt-10 border border-black   rounded px-8 py-2 block lg:hidden  '>Download CV</button>
    </section>
  )
}

export default AboutMe
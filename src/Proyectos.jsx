import React from 'react'
import { Card } from './Card'
import pomodoro from './assets/pomodoro.png'
import giffy from './assets/giffy.png'

const data = {
  img: ['https://media.istockphoto.com/id/1160018579/es/vector/mujer-joven-llenando-larga-nota-de-papel-con-la-lista-de-tareas-y-l%C3%A1piz-gigante.jpg?s=612x612&w=0&k=20&c=nqQY-TnPM-GMnO-X37MepJ6PXnJjB-NEzXMBXUMu6r0=', 'https://media.istockphoto.com/id/1305148090/es/vector/documento-de-archivo-gif-de-l%C3%ADnea-de-ne%C3%B3n-brillante-descargar-icono-de-bot%C3%B3n-gif-aislado-en.jpg?s=612x612&w=0&k=20&c=p_Trvk0OL0kV5mZbkKSZ8_cKEolMT3dDCyMG1kvo3bs=', 'https://media.istockphoto.com/id/912819604/es/vector/icono-de-e-commerce-de-dise%C3%B1o-plano-fachadas.jpg?s=612x612&w=0&k=20&c=KRxVmXjPkSc6PXUzw_MhISaI9DURd5pcLH1UZ1tji_Q='],
  description: ['Todo list que permite al usuario gestionar sus tareas de una manera eficiente y sencilla. La aplicación cuenta con diferentes funcionalidades que le permiten al usuario añadir, buscar y marcar como completadas las tareas que ha creado.', 'Permite a los usuarios buscar y ver sus GIFs favoritos de una manera rápida y sencilla. La aplicación cuenta con diferentes funcionalidades que le permiten al usuario buscar y visualizar los GIFs más populares en tendencia, así como también ver su última búsqueda de GIFs.', 'La tienda online creada con React es una herramienta eficiente y práctica que permite a los usuarios comprar productos en línea de manera sencilla y rápida que le permiten al usuario agregar productos al carrito de compras, verlos y calcular el total de la compra.']
}

export const Proyectos = () => {
  return (
    <section className='min-h-screen p-8 text-white lg:p-20  md:p-10 sm:p-20' id='projects'>
      <h2 className='text-5xl text-p font-semibold mb-20'>Proyectos</h2>
      <div className='grid lg:grid-cols-3  gap-20 md:grid-cols-2 justify-items-center'>
        <Card img={'https://media.istockphoto.com/id/1160018579/es/vector/mujer-joven-llenando-larga-nota-de-papel-con-la-lista-de-tareas-y-l%C3%A1piz-gigante.jpg?s=612x612&w=0&k=20&c=nqQY-TnPM-GMnO-X37MepJ6PXnJjB-NEzXMBXUMu6r0='} urlDeploy={'https://javiergualpa.github.io/todo-list/'} description={'Todo list that allows the user to manage their tasks in an efficient and simple way.'} title={'TodoList'} />
        <Card img={'https://media.istockphoto.com/id/1305148090/es/vector/documento-de-archivo-gif-de-l%C3%ADnea-de-ne%C3%B3n-brillante-descargar-icono-de-bot%C3%B3n-gif-aislado-en.jpg?s=612x612&w=0&k=20&c=p_Trvk0OL0kV5mZbkKSZ8_cKEolMT3dDCyMG1kvo3bs='} urlDeploy={'https://javiergualpa.github.io/giffy/'} description={'It allows users to search and view their favorite GIFS in a quick and easy way.'} title={'Giffy'} />
        <Card img={'https://media.istockphoto.com/id/912819604/es/vector/icono-de-e-commerce-de-dise%C3%B1o-plano-fachadas.jpg?s=612x612&w=0&k=20&c=KRxVmXjPkSc6PXUzw_MhISaI9DURd5pcLH1UZ1tji_Q='} urlDeploy={'https://javiergualpa.github.io/giffy/'} description={'Online store that allows the user to add products to the shopping cart, view them and calculate the total purchase '} title={'Shop'} />
      </div>
    </section>
  )
}

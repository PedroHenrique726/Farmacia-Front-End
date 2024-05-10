import { Link } from 'react-router-dom'
import React from 'react';
import remedio from '../../assets/remedio-icon.png';

function Navbar() {



  return (
    <>
      <div className='w-full bg-orange-200 text-white flex justify-center py-4'>
  <div className="container flex items-center justify-between text-lg">
    <div className="flex items-center gap-2">
      <img src={remedio} alt="" className='w-12 h-12'/>
      <Link to='/home' className='text-2xl font-bold uppercase text-gray-800'>Farmacia</Link>
    </div>

    <div className='flex gap-6'>
      <Link to='/home' className='bg-orange-200 hover:bg-orange-400 text-gray-800 font-bold py-2 px-4 rounded-l'>Home</Link>
      <Link to='/categorias' className='bg-orange-200 hover:bg-orange-400 text-gray-800 font-bold py-2 px-4 rounded-l'>Categorias</Link>
      <Link to='/cadastrarCategorias'  className='bg-orange-200 hover:bg-orange-400 text-gray-800 font-bold py-2 px-4 rounded-l'>Cadastrar</Link>
      <Link to='/sobre' className='bg-orange-200 hover:bg-orange-400 text-gray-800 font-bold py-2 px-4 rounded-l'>Sobre</Link>
    </div>
  </div>
</div>




    </>
  )
}

export default Navbar

import React from 'react';
import home from '../../assets/home.png'
import ListaCategorias from '../../components/categorias/listarCategorias/listarCategorias';



function Home() {
    return (
        <>
            <div className="bg-orange-300 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>


                        <div className="flex justify-around gap-4">

                            <a href="/categorias">
                                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver Categorias</button>
                            </a>

                            

                        </div>
                    </div>

                    <div className="flex justify-center ">
                    <img src={home} alt="" className='w-3/3' />

                    </div>
                </div>
            </div>
            <ListaCategorias />
        </>
    );
}

export default Home;
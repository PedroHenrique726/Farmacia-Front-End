import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home/home';
import ListaCategorias from './components/categorias/listarCategorias/listarCategorias';
import Sobre from './pages/sobre/Sobre';
import FormularioCategorias from './components/categorias/formularioCategorias/formularioCategorias';
import DeletarCategoria from './components/categorias/deletarCategorias/deletarCategorias';


function App() {

  return ( 
    <>
   

          <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/cadastrarCategorias" element={<FormularioCategorias />}/>
              <Route path="/editarCategorias/:id" element={<FormularioCategorias />}/>
              <Route path="/deletarCategorias/:id" element={<DeletarCategoria />}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
 
    </>
  )
}
export default App

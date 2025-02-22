import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Catalogo from './pages/Catalogo'
import DetalleProducto from './pages/DetalleProducto'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
    <BrowserRouter>     
    <NavBar/>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/>
        <Route path='/catalogo/category/:categoryId' element={<Catalogo/>}/>
        <Route path='/catalogo/item/:id' element={<DetalleProducto/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
      </Routes> 
    <Footer/>
    </BrowserRouter> 
    </>
  )
}

export default App
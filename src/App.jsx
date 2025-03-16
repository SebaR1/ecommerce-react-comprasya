import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Catalogo from './pages/Catalogo'
import Carrito from './pages/Carrito'
import DetalleProducto from './pages/DetalleProducto'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

  const itemsCollectionRef = collection(db, 'Items');
  const [itemsList, setItemsList] = useState([]);

  const getItems = async () => {
    const data = await getDocs(itemsCollectionRef);
    const filteredData = data.docs.map(doc => ({...doc.data(), id: doc.id}));
    console.log(filteredData);
    setItemsList(filteredData);
  }

  useEffect(() => {
    getItems();
  }, [])

  return (
    <>
    <BrowserRouter>     
    <NavBar/>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/>
        <Route path='/catalogo/category/:categoryId' element={<Catalogo/>}/>
        <Route path='/catalogo/item/:itemId' element={<DetalleProducto/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
      </Routes> 
    <Footer/>
    </BrowserRouter> 
    </>
  )
}

export default App
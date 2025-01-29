import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Home from './pages/Home'
import Footer from './components/Footer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <ItemListContainer greetings="Hola, soy un contenedor de una lista de items"/>
      <Footer/>
    </>
  )
}

export default App

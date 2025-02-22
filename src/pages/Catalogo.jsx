import React from 'react'
import ItemListContainer from '../components/ItemListContainer'

import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Catalogo() {
  return (
    <main>
      <ItemListContainer greetings='Bienvenidos a ComprasYA'/>
    </main>
  )
}

export default Catalogo
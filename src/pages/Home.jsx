import React from 'react'
import ButtonListContainer from '../components/ButtonListContainer'

import "../stylesComponents/Home.css"

function Home() {
  return (
    <main className='d-flex justify-content-center align-items-center flex-column'> 
        <h1 className='text-color-home'>ComprasYA</h1>
        <h3 className='text-color-home'>Este es un proyecto realizado por mi, Sebastian Romero</h3>
        <ButtonListContainer/>
        
    </main>
  )
}

export default Home
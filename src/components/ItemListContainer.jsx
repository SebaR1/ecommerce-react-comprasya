import React from 'react'

function ItemListContainer({greetings}) {
  return (
    <div 
    className='d-flex justify-content-center align-items-center
    mb-5 pb-5'>
      <p>{greetings}</p>
    </div>
  )
}

export default ItemListContainer
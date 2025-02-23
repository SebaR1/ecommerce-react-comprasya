import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../asynProducts'
import Item from './Item'

function ItemDetailContainer() {
  const [ product, setProduct] = useState(null)
  
  const { itemId } = useParams();

  useEffect(() => { 
  
    getProductsById(itemId) 
    .then((resp) => { 
      setProduct(resp)   
    })
    .catch((err) => {
      console.error(err); 
    })
  
  }, [itemId]) 
 
    return (  
   <div className="d-flex justify-content-center">    
      <Item  { ...product } />       
    </div> 
  )
}

export default ItemDetailContainer
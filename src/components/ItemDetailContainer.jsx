import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { getDoc } from 'firebase/firestore'


function ItemDetailContainer() {
  const [ product, setProduct] = useState(null)
  
  const { itemId } = useParams();

  useEffect(() => { 
  
    const docRef = doc(db, 'products', itemId)
  
    getDoc(docRef)
      .then(response => {
        const data = response.data();
        const productAdapted = ({id: response.id, ...data})
        setProduct(productAdapted);
      })
      .catch(error => {
        console.error(error);
      });

  }, [itemId]) 
 
  if (!product) {
    return <div>Cargando...</div>;
  }
  
  return (
    <div className="d-flex justify-content-center">
      <ItemDetail {...product} />
    </div>
  );

}

export default ItemDetailContainer
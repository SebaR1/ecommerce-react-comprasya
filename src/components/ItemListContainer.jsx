import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../asynProducts";
import { ItemList } from "./ItemList";

import { useParams } from "react-router-dom"; 

const ItemListContainer = ({ title }) => { 
 
    const [ products, setProducts ] = useState([]);
        
    const { categoryId } = useParams();

    useEffect(() => {
      const asynFun = categoryId ? getProductsByCategory : getProducts;
        
      asynFun(categoryId)  
          .then((resp) => { 
            setProducts(resp);   
          }) 
          .catch((err) => {
            console.error(err);
          }) 

        },[categoryId]) 

    return (   
          <>  
            <h1 className="py-5 text-color-home text-center d-flex justify-content-center align-items-center">
              {categoryId ? `${title} - ${categoryId}` : title}
            </h1>
            <ItemList  products={ products } /> 
          </>       

    ) 
} 

export default ItemListContainer;  
  
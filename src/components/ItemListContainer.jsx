import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../asynProducts";
import { ItemList } from "./ItemList";

import { useParams } from "react-router-dom"; 

const ItemListContainer = ({ greetings }) => { 
 
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
          <div>  
              <ItemList  products={ products } /> 
          </div>       

    ) 
} 

export default ItemListContainer;  
  
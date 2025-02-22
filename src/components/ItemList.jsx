import Item from './Item';

export const ItemList = ({ products }) => { 
    
  return ( 
      <div className="card"> 
           {
            products?.map( ( prod ) => (
             <Item  key={ prod.id} { ...prod }  /> 
              
             ))  
           }

     </div>   
    
    );
  
}
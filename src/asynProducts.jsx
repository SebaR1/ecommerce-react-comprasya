const products = [ 
    //remeras
    {
      id: '1',
      name: 'Remera Blanca H&M',
      price: 8000,
      category: 'Remeras',
      img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      stock: 25,   
      descrip: 'Remera blanca H&M con cuello redondo'  
    },
    {
        id: '2',
        name: 'Remera Negra',
        price: 8000,
        category: 'Remeras',
        img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        stock: 25,   
        descrip: 'Remera Negra con cuello redondo'  
    },
    
    //camperas  
    {
      id: '3',
      name: 'Campera Verde You',
      price: 38000,
      category: 'Camperas', 
      img: 'https://images.unsplash.com/photo-1633931764492-8ecb7742ebc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGphY2tldCUyMGdyZWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      stock: 7,   
      descrip: 'Campera Verde'   
    },
    {
        id: '4',
        name: 'Campera Naranja',
        price: 38000,
        category: 'Camperas', 
        img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 7,   
        descrip: 'Campera Naranja con cierre'   
    },
    
    //Buzos
    {
      id: '5',
      name: 'Buzo Negro',
      price: 17000,
      category: 'Buzos',
      img: 'https://images.unsplash.com/photo-1614975059251-992f11792b9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHN1ZGFkZXJhcyUyMG5lZ3Jhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', 
      stock: 15,  
      descrip: 'Buzo Negro You'  
    },  
    {
        id: '6',
        name: 'Buzo Gris',
        price: 21222,
        category: 'Buzos',
        img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        stock: 22,  
        descrip: 'Buzo Negro You'  
      },    
    
    //Jeans
    {
      id: '7',
      name: 'Jeans Hombre',
      price: 22000,  
      category: 'Pantalones',
      img: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      stock: 15,
      descrip: 'jeans originales' 
    }, 
    {
        id: '8',
        name: 'Jeans Negro',
        price: 8000,  
        category: 'Pantalones',
        img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 53,
        descrip: 'Jeans negros anchos' 
      }, 
  ] 


export const getProducts = () => {
    return new Promise((resolve) => {

       setTimeout(() => {
           resolve(products);   
       }, 500)   
 
    })    
}

export const getProductsById = ( productId ) => {
  return new Promise((resolve) => {

     setTimeout( () => {
         resolve(products.find(prod => prod.id === productId));    
     }, 500)    
 
  })   
 }

 export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => { 
 
     setTimeout( () => { 
         resolve(products.filter(prod => prod.category === categoryId));    
     }, 500)       
 
  })  
 }
import React, { use } from 'react'
import { useState } from 'react';

const Products = ()=>{
  const [cart, setCart] = useState([]);
  const products =[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
    
  },
]


console.log("cart",cart);
const addToCart = (product)=>{
  const isPresent = cart.find((item)=>{
    return item.id===product.id
  })
  if(isPresent)
    {
   const updatedCart = cart.map((item)=>{
    if(item.id===product.id){
      return {...item, qty: item.qty+1}
    }
    else{
      return item;
    }

  })
  setCart(updatedCart)
  }
  else{
     setCart([...cart,{...product, qty:1}])
  }
}

return (
    <div >    
        <div >
          <h1>Product Area</h1>
        {
          products.map((product)=>{
            return(
              <div key={product.id} style={{border:"2px solid black",}}>
                
                <h1>{product.title}</h1>
                <img src={product.image}/>
                <h2>{product.price}</h2>
                <button onClick={()=>addToCart(product)}>Add to Cart</button>
               
              </div>

            )
          })
        }
        </div>
        <div>
          <h1>Cart Area</h1>
          {
            cart.map((item)=>{
              return(
                <div key={item.id} style={{border:"2px solid black",}}>
                  <h1>{item.title}</h1>
                  <img src={item.image}/>
                  <h2>{item.price}</h2>
                  <h2>Qty: {item.qty}</h2>
                </div>
              ) 
            })
            }
        </div>
       
    </div>
  )
}

export default Products;


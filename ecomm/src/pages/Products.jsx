import React, { use } from 'react'
import {useContext} from 'react';
import {CartContext} from '../context/cartContext'

const Products = ()=>{

const {products,cart,addToCart} = useContext(CartContext)

return (
    <div >    
        <div >
          <h1>Product Area</h1>
        {
          products.map((product)=>{
            return(
              <div key={product.id} style={{border:"2px solid black",display:"inline-block", margin:"10px", width:"500px", overflow:"hidden"}}>
                
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


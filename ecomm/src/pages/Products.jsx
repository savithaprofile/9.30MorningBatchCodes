import React, { use } from 'react'


const Products = ({products, cart, setCart})=>{

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


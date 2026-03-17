import React from 'react'

const Home = ({products, cart, setCart}) => {
  return (
    <div>
      {products.map((product)=>{
        return(
          <div key={product.id} style={{border:"2px solid black",display:"inline-block", margin:"10px", width:"500px", overflow:"hidden"}}>
            
            <h1>{product.title}</h1>
            <img src={product.image}/>
            <h2>{product.price}</h2>
           
          </div>

        )
      })}
      <h1>Cart Area</h1>
      {
        cart.map((item)=>{
          return(
            <div key={item.id} style={{border:"2px solid black",display:"inline-block", margin:"10px", width:"500px",height:"500px", overflow:"hidden"}}>
              <h1>{item.title}</h1>
              <img src={item.image} width="300px" height="300px"/>
              <h2>{item.price}</h2>
              <h2>{item.qty}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
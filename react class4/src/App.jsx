import React from 'react'
import { useState } from 'react';
const App = () => {

  const [count, setCount] = useState(0);
  const [name, setname] = useState("Samiksha")
  const [number,setNumber] = useState(0);
  // const [var_name, setVar_name]=useState(initial_value);
  
  const changeName = () => {
    // if(name=="Samiksha"){
    // setname("Rubini")
    // }
    // else{
    //   setname("Samiksha")
    // }

    //?:--m ternary operator
    (name == "Samiksha") ? setname("Rubini") : setname("Samiksha")
  }

  const changeNum=()=>{
    setNumber(number+1)//0+1=1
    setNumber(number+1)//0+1=1

    setNumber(20);// 20
    setNumber(60)
  }
  //react batch execution process
 
  return (
    <div>
      <button onClick={()=>changeNum()}>Number:{number}</button>


      {/* <button onClick={()=>{setCount(count+1)}}>Count: {count}</button> */}
      <button onClick={() => { setCount(count + 1) }}>+</button>
      <h1>{count}</h1>
      <button onClick={() => { setCount(count - 1) }}>-</button>


      <h1> The name is {name}</h1>
      <button onClick={() => { changeName() }}>click to change name</button>
    </div>

  )
}

export default App;
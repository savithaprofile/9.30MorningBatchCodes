import React from 'react'
import { useState,useEffect } from 'react'

const Name = () => {
    const [name,setName]= useState("John");
    const [count,setCount]= useState(0);
    console.log("Im Name. Im getting rendered")

 useEffect(()=>{
 console.log("Welcome! run once")
 },[]);

 useEffect(()=>{
    console.log(" I will run only if count is changed")
 },[count,name])


    const changename=()=>{
        if (name=="John"){
            setName("Jane")
        }
        else{
            setName("John")
        }
    }
  return (
    <div style={{"border":"5px solid red"}}>
        <div>{name}</div>
        <button onClick={()=>changename()}>Change name</button>
        <div>{count}</div>
        <button onClick={()=>setCount(count+1)}>increase</button>
    </div>
  )
}

export default Name;
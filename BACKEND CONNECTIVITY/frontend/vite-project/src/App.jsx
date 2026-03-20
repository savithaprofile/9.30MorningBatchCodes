import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const App = () => {
const [name, setName] = useState("Shamiksha");
const [result, setResult] = useState("");
// const [formdata, setFormData] = useState({
//   email: "",
//   password: ""
// });
// const [data, setData] = useState("");
//   const sendData = async () => {
  
//       const response = await axios.post('http://localhost:4000/send-name', {name});
//       setData(response.data);
//       console.log(response);
//   }

// fetch('http://localhost:4000/products',{method:"GET"})// const res = axios.get('http://localhost:4000/products')
// .then(res => res.json())//.json() is used to convert the response into json format ||totally optional
// .then(data => console.log(data))// setResult(res.data) ||res.data
// .catch(err => console.log(err))
const sendToBackend = async () => {
  try {
    const response = await axios.post('http://localhost:4000/send-name', { name });
    console.log(response.data);
    setResult(response.data); 
    if(response.data.message==="ok"){
      alert("Welcome to the dashboard");
    }
    else{
      alert("Invalid credentials"); 
    }// Assuming the backend sends a message in the response
  } catch (error) {
    console.error('Error sending data to backend:', error);
  }
}

  return (
    <div>
      <h1>Welcome to React</h1>
      

        <input type="text" id="name"  value={name} onChange={(e) =>{setName(e.target.value)} }></input>
        <button onClick={sendToBackend}>Send to Backend</button>

        <h2>{name}</h2>

        <h1> {result.message}</h1>
      
    </div>
  )
}

export default App
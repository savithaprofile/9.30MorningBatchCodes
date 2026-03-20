const express =require('express');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());


app.get('/',(req, res)=>{
    res.send("Hello world");
})

app.get('/about',(req, res)=>{
    res.send("This is about page");
})

app.get('/products',(req,res)=>{

    const products = [{
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
}]
 res.json(products)
})

app.post('/send-name',(req, res)=>{
    const {name,password} = req.body;

    if(name==="Shamiksha" && password === "12345"){
        return res.json({message: "ok"})
    }
    if (name==="Rubini" && password === "54321"){
        return res.json({message: "ok"})
    }
    res.json({message: `Sorry, I don't know you`})
})


app.listen(4000, ()=>{
  console.log("Server is running on port 4000");
});
// 1. fetch
// 2. response status and change to json
// 3. using the json

fetch("https://api.adviceslip.com/advice")
.then(res => res.json())
.then(data=>{
    console.log("Quote",data.slip.advice);
})


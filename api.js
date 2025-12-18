// 1. fetch
// 2. response status and change to json
// 3. using the json

//.catch() : catches the error. Only gets executed if there is an error
//.finally() : gets executed no matter what, when the fetch is done, even if there is an error

fetch("https://api.adviceslip.com/advice")
.then(res => res.jon())
.then(data=>{
    console.log(data);
    console.log("Advice:",data.slip.advice);
})
.catch(()=>{
    console.log("Some Error Occured in fetch");
})
.finally(()=>{
    console.log("the fetch is done");
});


//async and await

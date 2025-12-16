// function hello(){
//     console.log("hello world");
// }


// hello();
// setTimeout(hello, 2000);
// console.log("Start");

//setInterval

// setInterval(hello, 3000);

// clearInterval

//method 1 of set interval

// setInterval(()=>{
//     console.log("Hello world");
// },2000);

// var x = setInterval(()=>{
//     console.log("Hello world");
// },2000);


// //method 2 of set interval

// function hello(){
//     console.log("hello world");
// }

// var x = setInterval(hello,2000);

// clear interval for both methods
// setTimeout(()=>{
//     clearInterval(x);
// },10001);


// set timeout and set interval 

// function greet(){
//     console.log("Good Morning");
// }
// setTimeout(greet, 3000);

setTimeout(()=>{console.log("Good Morning");}, 2000)
var x=  setInterval(()=>{console.log("Hello world");}, 1000)

setTimeout(()=>{
    clearInterval(x);
}, 5100);


//async await
var url = "https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=ff25a004b3202c3d410ac62abb7584eb";
async function weather(){
   const res = await fetch(url);
   const data = await res.json();
   console.log(data);   
}
// weather();



// async function add(a, b) {
//   return a + b;
// }

// // Arrow function 
// const add = async (a, b) => {
//   return a + b;
// };


// // Expression
// const add = async function(a, b) {
//   return a + b;
// };



var a= 10;
var b= "10";

console.log(a+b)


console.log(a===b)





//  > < >= <= == === != conditional operator


// == checks for value, === checks for value and type



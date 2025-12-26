/*
1. object is key value Pair
2. array is list with square bracket []
3. object is curly braces {}
4. "apple", "banana", "orange"
[
"apple",
 "banana", 
 "orange"
 ]
5. {name:"savitha", gender:"female"}

6.
x = [
    {
    name:"ghi",
    gender:"female"
     },
    {
     name:"abc",
     gender:"female"
     },
    {
     name:"def", 
     gender:"female"
    }
]
x[0]
7. x= {
    name:"abc",
    gender:"female",
    phone:["9876", "1234"]
    }
x.phone[1]
*/

// var fruits =["apple", "banana"];
// console.log(fruits[0]);
const key = "ff25a004b3202c3d410ac62abb7584eb";
const city = "ooty";
var url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

fetch(url)
.then(res=>res.json())
.then(data=>console.log(data));
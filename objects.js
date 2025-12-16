var arr=["apple", "banana", "chiku", "mango"];

arr.forEach((item)=>{
    console.log(item);
})

console.log(arr[2]);

var obj={
    name:"John",
    age:30,
    city:"New York"
};

// console.log(obj["name"]);
// console.log(obj["age"]);

// console.log(obj.city);

// console.log(obj);


obj.name="John Doe";
console.log(obj);

obj.country="USA";
console.log(obj);

//for ..in loop

for (var x in obj){
    console.log(x, obj[x]);
}

console.log(obj)

// ... spread operator


var arr23=[1,2,3,4,5,6,7,8,9];

 var arr2= [0,...arr23,10,11,12]

console.log(arr2);






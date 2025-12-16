//reduce()

var arr = [12,18,24,49,17,78];

arr.reduce((total,x)=>total*x,1) //arr.reduce((total,x)=>total+x,0);
//arr.reduce((total(Variable to store the result),x(loop item each time))=>function, initial value of total);
// var arr=["red", "green", "blue", "yellow"];
// arr.reduce((total,x)=>total+" "+x,"");

//slice() || splice()

// var arrSliced =arr.slice(1,3);
// console.log(arrSliced);

arr.splice(0,3);// (index,delete count,new item1,new item2,new item3)
console.log(arr);
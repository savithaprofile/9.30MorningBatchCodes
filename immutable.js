//immutable array methods:
//  map, filter, reduce, find, includes, indexOf, slice

const colors= ["red", "green", "blue", "yellow"];

// console.log(colors);

// colors.map((x)=>{
//     console.log("Hello",x);
// });

// colors.forEach(()=>{
//     console.log("Hello");
// });

//filter

const num =[1,2,3,4,5,6,7,2,10];

// console.log(num.filter((x)=>x>4));// [5,6,7,10]
// console.log(num.filter((x)=>x>4));

// console.log(num);

var arr = [12,18,24,49,17,78];

//find()

var resultFind = arr.find((x)=>x>17);
var resultFilter = arr.filter((x)=>x>80);

console.log(resultFind);
console.log(resultFilter);

// includes() 

var colrs = ["red", "green", "blue", "yellow"];// boolean values : true or values
var resultIncludes= colrs.includes("pink");

console.log(resultIncludes);
//indexOf() either index, item not present -1

var resultIndexOf= colrs.indexOf("pink");
console.log(resultIndexOf);

//slice()
var resultSlice = colrs.slice(0,4);
console.log(resultSlice);


//map(), filter(), includes(), indexOf(), slice(), find()
// class 2 of immutable:: slice(), reduce();





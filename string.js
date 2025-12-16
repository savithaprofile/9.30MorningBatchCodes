var str="heLLlo, Have ,a nice day Have";

//length()
console.log(str.length);

//toUpperCase()
console.log(str.toUpperCase());

//toLowerCase()
console.log(str.toLowerCase());

//charAt()
console.log(str.charAt(0));

//indexOf()
console.log(str.indexOf("L"));
console.log("Index of eLL",str.indexOf("day"));

//indexOFLast()
console.log(str.lastIndexOf("L"));

//slice()
console.log(str.slice(1,2));// (start index, end index)

//split()

console.log(str.split(" "));

//replace()
console.log(str.replace("Have","has"));

console.log(str.replaceAll("Have","has"));
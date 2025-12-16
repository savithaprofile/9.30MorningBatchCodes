// var phone1="1234", phone2="2345", phone3="3456", phone4="4567", phone5="5678";

var phone =[ "1234", "2345","0012", "3456", "4567","89766", "5678"];
phone.reverse();

console.log(phone);
phone.sort((a,b)=> a-b);
console.log(phone);
var colors=["red", "green", "blue", "yellow"];
colors.sort((a,b)=> a.localeCompare(b));
console.log(colors);

//mutating array methods
//push, pop, shift, unshift,splice, sort, reverse

// phone.push("6789","7890");
// console.log(phone);

// phone.pop();
// console.log(phone);

// phone.shift();
// console.log(phone);

// phone.unshift("1111");
// console.log(phone);

// phone.splice(2,2);
// console.log(phone);

// phone.splice(2,0,"2222","3333");
// console.log(phone);

// phone.reverse();
// console.log(phone);









// var num = [1,2,3,4,5,6];
// console.log(num);
// num =[1,2,3,4,5,6,7,8,9];


// console.log(num);


// array methods push, pop, shift, unshift


//adding items in start : unshift, adding items in end : push

// num.push(10,11,34,56);
// console.log(num);


// num.unshift(47);
// console.log(num);


// colors.unshift("brown");
// console.log(colors);

// // removing items in start : shift, removing items in end : pop

// colors.pop();
// colors.pop();
// console.log(colors);

// colors.shift();
// console.log(colors);
// var colors=["red", "green", "blue", "yellow"];

//map()


// colors.map(
//     ()=>{ console.log("hello");}
// )

// colors.map(
//     (x)=>{ console.log("hello",x);}
// ); 



// var number= ["one",two,three,four,five]
// number.map(
//     (x)=>{
//         console.log(x);
//     }
//     );
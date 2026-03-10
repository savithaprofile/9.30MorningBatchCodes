const colors =["red", "green","blue"]

const foundItem = colors.find((x)=>{
    return x==="gray"
})

console.log(foundItem)

// console.log(colors)



const prod=[
    {"id":2, title:"second"},{ "id":3, title:"third"}
]

const box =prod.find((x)=>{
    return x.id===2
})
console.log(box)

var x;
console.log(x)
//spread operator

var a = [1,2,3]

a= [...a,4,5,6]
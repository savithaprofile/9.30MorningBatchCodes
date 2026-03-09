const colors =["red", "green","blue"]
console.log(colors)



const prod=[
    {"id":2, title:"second"},{ "id":3, title:"third"}
]

const box =prod.find((x)=>{
    return x.id===4
})
console.log(box)
// var object={
//     "error": false,
//     "category": "Pun",
//     "type": "twopart",
//     "setup": "Has COVID-19 forced you to wear glasses and a mask at the same time?",
//     "delivery": "If so, you may be entitled to condensation.",
//     "flags": {
//         "nsfw": false,
//         "religious": false,
//         "political": true,
//         "racist": false,
//         "sexist": false,
//         "explicit": false,
//         "medical": [
//             {"FaYen":"Sign", "Node":"ter", "Java":"Script"},
//             {"FaYen":"Sign", "Node":"ter", "Java":"Script"}
//         ]
//     },
//     "id": 212,
//     "safe": true,
//     "lang": "en"
// }
// console.log(object.flags.medical[0].Node);
// console.log(object.setup);
// console.log(object.delivery);

fetch("https://sv443.net/jokeapi/v2/joke/Any")
.then(res=>{
    return res.json();
})
.then(data=>{
    console.log("data:",data);
    console.log(data.setup);
    console.log(data.delivery);
});





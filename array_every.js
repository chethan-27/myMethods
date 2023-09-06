const filter = {
    "fname":"chet",
      age : 20,
      "adress": "Kormanla",
      "contact" : 1234567
}

const sys_top = [
    {
        name : "fname",
        type : "textBox"
    },
    {
        name : "age",
        type : "textBox"
    },
    {
        name : "adress",
        type : "textBox"
    },
    {
        name : "contact",
        type : "textBox"
    }
]

console.log(sys_top.every(e => {
    return Object.keys(filter).includes(e.name)
}))


console.log((sys_top.map(e => {
    return e.name
})));

console.log(Object.keys(filter).map(i => {
    return i
}));

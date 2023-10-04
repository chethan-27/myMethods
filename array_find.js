const filter = {
    "fname.name":"chet",
      age : 20,
      "adress.adress1": "Kormanla"
}

const sys_top = [
    {
        nam1 : "age",
        type : "textBox"
    },
    {
        name : "fname",
        type : "textBox"
    },
    {
        name : "adress",
        type : "textBox"
    }
]

const func = (e)  =>{
    return e == "name"
}

console.log(sys_top.find(filter))
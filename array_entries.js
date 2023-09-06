const filter = {
    "fname.name":"chet",
      age : 20,
      "adress.adress1": "Kormanla"
}

const sys_top = [
    {
        name : "age",
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

const f = sys_top.entries()
for (let i of f) {
    console.log(i)
}
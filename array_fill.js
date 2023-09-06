const filter = {
    "fname":"chet",
    //   age : 20,
      "adress": "Kormanla"
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

console.log(sys_top.fill(filter,0,2))
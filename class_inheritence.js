class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = () =>{
    return this.h
}

// class Square extends Rectangle{
//     constructor(s){
//         super()
//         this.h = s
//         this.w = s
//     }
// }

// const sqr = new Square(10)


const rect = new Rectangle(10,20)

console.log(rect.area())


// console.log(sqr.area())
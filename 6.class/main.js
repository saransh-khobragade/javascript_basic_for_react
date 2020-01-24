class Shape {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}

class Rectangle extends Shape{
    constructor(height, width) {
      super(height, width)
    } 
    
    //normal method
    calcArea() {
        return this.height * this.width;
    }

    //getter method
    get area() {
        return this.calcArea();
    }

    //static method
    static static_method(){
      return "reached static method"
    }
}

const p = new Rectangle(10,20);

console.log(p.calcArea())
console.log(p.area)
console.log(Rectangle.static_method())

const a = p.calcArea  //losed context this reference to object memory itself
//console.log(a())

const b = p.calcArea.bind(p)
console.log(b())



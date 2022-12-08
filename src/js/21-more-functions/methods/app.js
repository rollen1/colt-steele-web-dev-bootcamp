/*

"hello".toUpperCase() // "HELLO" - string method

[1, 2, 3].indexOf(2); // 1 

*/

// methods

// we can add functions as properties on objects

const myMath = {
    PI: 3.14159,
    square(num) {
        return num* num;
    },
    cube(num) {
        return num ** 3;
    }
}

myMath.PI // 3.14159

myMath.square(2) // 4

myMath.cube(2) // 8

myMath["cube"](4) /// 64

// 'this' keyword

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'Scottish Fold',
    meow() {
        console.log(`${this.name} says meow`); // Blue Steele says meow
    } 
}

// invocation context

const meow2 = cat.meow; // ________ says meow
// functions

/*

let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let die3 = Math.floor(Math.random() * 6) + 1;
let die4 = Math.floor(Math.random() * 6) + 1;
let die5 = Math.floor(Math.random() * 6) + 1;
let die6 = Math.floor(Math.random() * 6) + 1;

 */

function funcName() {
    // do something
}

function singSong() {
    console.log('DO');
    console.log('RE');
    console.log('MI');
}


// arguments

/*
 function greet(firstName) {
    console.log(`Hey there, ${firstName}!`);
} 
*/

// more arguments

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName + lastName[0]}.`);
}

function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    console.log(result);
}

// return

// you can only return ONE thing

// return can save values
// while console.log() does not

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'); {
        return false;
    }
    let sum = x + y;
    return sum;
    console.log("lol") // return is like break;
}
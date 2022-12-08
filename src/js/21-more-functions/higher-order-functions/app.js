// higher order functions

// functions that operaton on/with other functions

// accept other functions as arguments

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);

// return a function

function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5) {
        return function() {
            console.log("I am a good function!");
        }
    } else {
        return function() {
            console.log("I am a bad function!");
        }
    }
}

const mystery = makeMysteryFunc(); // we need to catch it

mystery();


function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 300);

isChild(40) // false

// makeBetweenFunc(50, 100) 

function isBetween(num) {
    return num >= 50 && num <= 100;
}

function isBetween2(num) {
    return num >= 1 && num <= 10;
}
// function scope

// variables we define in the function, are scoped in that function

function collectEggs() {
    let totalEggs = 6;
}

// this code will return 'undefined'

collectEggs();
console.log(totalEggs);

// a solution is to make global variable and change variables in the function

let totalEggs = 0;
function collegEggs() {
    totalEggs = 6;
}

// ****************************************************************************

let bird = 'Scarlet Macaw';

// ****************************************************************************
function birdWatch() {
    let bird = 'Great Blue Heron';
    console.log(bird); // 'Great Blue Heron'
    // we get 'Scarlet Macaw' if we don't have a variable in the function
}
// ****************************************************************************

console.log(bird); // 'Scarlet Macaw'

// ****************************************************************************

// block scope

let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'Hi!';
}

console.log(radius); // 8
console.log(PI); // PI is undefined
console.log(msg); // msg is undefined

for(let i = 0; i < 5; i++) {
    let msg = 'random';
    console.log(msg); // will return
}

console.log(msg); // undefined

// lexical scope

// child functions have access to parent function variables
// but you need to call them first

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];
    function cryForHelp() {
        function inner() {
            for(let hero of heroes) {
                console.log(`Pleas help us, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}
// empty array
let sampleArray = [];

// string array 
let stringArray = ['random', 'whatever', 'yeah', 'lol'];

// lotto number array 
let lottoNums = [19, 21, 57, 34, 47];

// a mixed array
let stuff = [true, 69, 'cat', null];

// arrays are indexed!

// true = true.indexOf(0)
// null = null.indexOf(3)

// modifying arrays

let colors = ['rad', 'orange', 'yallow'];

// will change colors[0] from 'rad' to 'red'
// and 'yallow' to 'yellow'

colors[0] = 'red';
colors[2] = 'yellow';

// you can do that, but it just adds empty indexes

colors[10] = 'indigo';

// array methods

// push & pop

let movieLine = ['tom', 'nancy'];

// adds new value to the end of the array

movieLine.push('oliver');
movieLine.push('harry', 'hermione'); // you can add more values!

movieLine.pop() // returns last index of an array and removes it!

/* 

let barbell = [];
undefined
barbell.push(45)
1
barbell.push(45)
2
barbell.push(25)
3
barbell.push(10)
4
barbell.push(2.5)
5
barbell
Array(5) [ 45, 45, 25, 10, 2.5 ]

barbell.pop();
2.5
barbell.pop();
10
barbell.pop();
25
barbell.pop();
45
barbell.pop();
45
barbell
Array []

*/

// shift & unshift

movieLine.shift() // removes first index of an array and returns it

// 'tom'

movieLine.unshift('VIP') // adds to the first index of an array

// more methods

// concat

let cats = ['blue', 'kitty']
let dogs = ['rusty', 'wyatt']

cats.concat(dogs)
Array(4) [ "blue", "kitty", "rusty", "wyatt" ]

let comboParty = dogs.concat(cats)

comboParty;

// includes is a boolean check for a value

// true

cats.includes('blue');

// false

cats.includes('Blue');

// [0]

// indexOf shows the index of a value

// it only shows the first value if duplicate values exist

comboParty.indexOf('rusty')

// [3]

comboParty.indexOf('kitty')

// -1

comboParty.indexOf('gdasighi')

// reverses the array

// reverse is a destructive method, it changes the original array

comboParty.reverse();

// slice, splice & sort

// slice

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

colors.slice(); // will make you a copy of colors array

colors.slice(1); // will only slice out 'red'

let coolColors = colors.slice(3); // from 'green' to the end

colors.slice(2, 4); // [yellow, green]

colors.slice(-3) // -3 gives you the last three: ['blue', 'indigo', 'violet];

// splice

colors.splice(5, 1) // removes 'indigo' from the array and changes the original

colors.splice(1, 0, 'red-orange'); // inserting between 'red' and 'orange'

colors.splice(4, 0, 'yellow-green', 'forestgreen'); // inserts multiple values, [4] because our array has a new value

colors.splice(2, 2, 'Deleted!'); // deletes 'orange' and 'yellow' and replaces with 'deleted'

// sort

let scores = [1, 70, 100, 2500, 9, -12, 0, 34] 

scores.sort()
// Array(8) [ -12, 0, 1, 100, 2500, 34, 70, 9 ]

// const works with arrays

const myEggs = ['brown', 'brown'];

myEggs.push('purple');
myEggs[0] = 'green';

// you can't do it because they are different in memory
myEggs = ['blue', 'pink']; // NO!

// nested arrays 

const colors = [
    ['red', 'crimson'],
    ['orange', 'dark orange'],
    ['green', 'olive']
    // and so on
]

const board = [
    ['0', null, 'X'],
    [null, 'X', '0'],
    ['X', '0', null]
]

const gameBoard = [['X', '0', 'X'], ['0', null, 'X'], ['0', '0', 'X']];

gameBoard[1] // gives you the second array
gameBoard[1][1] // gives you the middle value

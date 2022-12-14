// spread

// spread in function calls

const nums = [1, 10, 100, 1000, 10000];

// NaN
Math.max(nums)

// will return 10000
Math.max(...nums)

console.log(nums); // [1, 10, 100, 1000, 10000];
console.log(...nums); // 1 10 100 1000 10000

console.log('hello'); // hello
console.log(...'hello'); // h e l l o

// spread with array literals

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs] // new array from two arrays!
// you can even add separate values with the combined arrays

// spread with objects

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = {...feline, ...canine} // combines both objects but overrides 'family' 

//

const dataFromForm = {
    email: 'hitman@gmail.com',
    password: 'tobias',
    username: 'rieper'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
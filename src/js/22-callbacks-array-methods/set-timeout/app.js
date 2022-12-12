// setTimeout

// the browser will wait to call the function

/* 
console.log("hello!!");

setTimeout(() => {
    console.log("are you still there?");
}, 3000)

console.log("Goodbye"); 
*/

// it repeats the code every specified interval

const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

// clearInterval(id);
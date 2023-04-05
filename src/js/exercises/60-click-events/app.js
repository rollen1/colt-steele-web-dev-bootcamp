/* 
Let's get some practice using addEventListener. I've provided you with two buttons, each with an id: 'hello' and 'goodbye'.  Your goal is to add a click listener to each button. 

    When the hello button is clicked, you should console.log "hello"

    When the goodbye button is clicked, you should console.log "goodbye" 
*/

const hello = document.querySelector('#hello');

hello.addEventListener('click', function() {
    console.log('hello');
})

const goodbye = document.querySelector('#goodbye');

goodbye.addEventListener('click', function() {
    console.log('goodbye');
})

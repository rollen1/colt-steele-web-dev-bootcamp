/* 
Rainbow Text Exercise

I've provided you with an <h1> element which contains 7 individual spans (each holding a single letter). 

    Please write some JavaScript to make them rainbow-colored! 

    In app.js you'll find an array of color names called colors.  It looks like: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].

    Your task is to select all spans, iterate over them, and assign them each one of the colors from the colors array.  The first span should be red, the second should be orange, etc.    
*/

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; 


// selection 
const spans = document.querySelectorAll('h1 span');

// solution 1
for (i = 0; i < spans.length; i++) { 
    spans[i].style.color = colors[i];
}

// solution 2
spans.forEach((span, index) => { 
    span.style.color = colors[index];
})

// solution 3 
let i = 0;
for (const span of spans) {
    span.style.color = colors[i];
    i++;
}
/* 
Manipulating Attributes Practice

Let's get some practice working with DOM element attributes. I've provided you with some very basic markup.  Please select the image element and:

    change its source to this url: https://devsprouthosting.com/images/chicken.jpg

    change its alt text to be "chicken" 
*/

const egg = document.querySelector('img');

egg.src = 'https://devsprouthosting.com/images/chicken.jpg';
egg.alt = 'chicken';

// egg.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
// egg.setAttribute('alt', 'chicken');

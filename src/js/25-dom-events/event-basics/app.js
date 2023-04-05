const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('you clicked me');
    console.log('i hope it worked!');
}

function scream() {
    console.log("AAAAAAAAA");
    console.log("waaah");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert('clicked!');
});

function twist() {
    console.log('twist');
}

function shout() {
    console.log('SHOUT');
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;
// can't have 2 different callback functions

tasButton.addEventListener('click', twist, { once: true });
tasButton.addEventListener('click', shout);
// addEventListeners allows to have more callback functions
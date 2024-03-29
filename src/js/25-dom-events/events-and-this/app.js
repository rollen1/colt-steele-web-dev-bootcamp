const makeRandColor = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         button.style.backgroundColor = makeRandColor();
//         button.style.color = makeRandColor();
//     });
// }

const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', colorize);
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
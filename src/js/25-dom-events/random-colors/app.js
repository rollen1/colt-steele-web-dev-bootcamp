const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function () {
    const randColor = makeRandColor();
    document.body.style.backgroundColor = randColor;
    h1.innerText = `${randColor}`;
});

const makeRandColor = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

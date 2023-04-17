const form = document.querySelector('form');
const product = document.querySelector('#product');

const qty = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const qtyVal = qty.value;
    const productVal = product.value;
    const newli = document.createElement('li');

    newli.innerText = `${qtyVal} ${productVal}`
    list.append(newli);

    qty.value = '';
    product.value = '';
});

// older code 

// const form = document.querySelector('form');
// const ul = document.querySelector('#list');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     const qty = document.querySelector('#qty');
//     const product = document.querySelector('#product');
    
//     const li = document.createElement('li');
//     li.innerText = `${qty.value} ${product.value}`;
    
//     ul.appendChild(li);
    
//     qty.value = '';
//     product.value = '';
// });
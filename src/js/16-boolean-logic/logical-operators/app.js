// =====================
// LOGICAL AND OPERATOR
// =====================

// true
true && true
// false
true && false
// false
false && false
// false
false && true

const password = prompt('Enter your password');
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('Valid password!');
} else {
    console.log('Invalid password!');
}


// =====================
// REVISITING AGE EXAMPLE
// =====================

// true
true || true
// true
true || false
// true
false || true
// false
false || false

// 0-5 free 
// 5-10 $10 
// 10-65 $20
// 65+ free

const age = -1000;

if (age >= 0 && age < 5 || age >= 65) {
    console.log('Free');
} else if (age >= 5 && age < 10) {
    console.log('$10');
} else if (age >= 10 && age < 65) {
    console.log('$20');
} else {
    console.log('Invalid age!')
}


let firstName = prompt("enter your first name");
if (!firstName) {
    firstName = prompt("TRY AGAIN!!!");
}

// =====================
// COMBINING && and ||
// =====================

const age2 = 8;
if (!(age2 >= 0 && age < 5 || age >= 65)) {
    console.log('You are not a baby or a senior!');
}


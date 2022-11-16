// =====================
// Basic if/else
// =====================

let random = Math.random();
if (random < 0.5) {
    console.log('Your number is less than 0.5');
    console.log(random);
} else {
    console.log('Your number is greater than 0.5');
}

// =====================
// Prompt example
// =====================

const dayOfWeek = 'Friday';

if (dayOfWeek === 'Monday') {
    console.log('Ugh I hate Mondays');
} else if (dayOfWeek === 'Saturday') {
    console.log('Yay I love Saturdays');
} else if (dayOfWeek === 'Friday') {
    console.log('Fridays are decent, especially after work')
} else {
    console.log('Meh');
}


// =====================
// TICKET PRICE EXAMPLE
// =====================

// 0-5 - FREE
// 5 - 10 CHILD $10 
// 10 - 65 ADULT $20 
// 65+ SENIOR $10

const age = 22;

if (age <= 5) {
    console.log('You are a baby. You get in for free');
} else if (age <= 10) {
    console.log('You are a child. You pay $10');
} else if (age <= 65) {
    console.log('You are an adult. You pay $20');
} else {
    console.log('You are a senior. You pay $10');
}

// =====================
// NESTING CONDITIONALS
// =====================

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}




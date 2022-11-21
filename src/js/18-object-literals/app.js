// objects

// objects are collections of PROPERTIES
// properties are a key-value pair
// rather than accessing data using an index, we use custom keys.


const fitBitData = {
    totalSteps: 308727, // property + key value
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: "2:13"
}

const person = {
    firstName: 'Gordon',
    lastName: 'Freeman',
    age: 27
}

let comment = {
    username    : 'lalala',
    downVotes   : 0,
    upVotes     : 12
}

const kitchenSink = {
    favNum: 9321,
    isFunny: true,
    colors: ['red', 'orange']
}

// object access

person["firstName"] // Gordon
person.age // 27

// works too! :D

person['first' + 'Name'] // Gordon 

// all keys are converted to strings

const years = {
    1999: 'good',
    2020: 'bad'
}

// adding/updating information

const midterms = {
    danielle: 96,
    thomas: 78
}

midterms.thomas = 79;  // changes it to 79

midterms.thomas = "C+";
midterms['danielle'] = 'A';

midterms.ezra = 'B+'; /// adds one more key
midterms['antonio'] = 'A-';

// nesting arrays + objects

const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
}

const comments = [
    {username: 'tammy', text: 'gadjhi', votes: 9},
    {username: 'fishboy', text: 'glub glub', votes: 125164}
]

comments[1] // displays fishboy object

comments[1].text // 'glub glub'
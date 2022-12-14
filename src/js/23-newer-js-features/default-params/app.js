// default params

// new way
function rollDie(numSides = 6) {
    // old way
    // if (numSides === undefined) {
    //     numSides = 6;
    // }
    return Math.floor(Math.random() * numSides) + 1;
}

// the order matters!
function greet(person, msg = "Hey there!", punc = "!") {
    return `${msg}, ${person}${punc}`
}
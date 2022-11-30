const testScores = {
    keenan: 80,
    marlon: 72,
    elvira: 97,
    nadia: 83,
    james: 53,
    bonnie: 60
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

Object.keys(testScores)
// array of keys
Object.values(testScores)
// scores (key values)
Object.entries(testScores)

let total = 0;
// objects don't have length
// but you can do this:
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length);

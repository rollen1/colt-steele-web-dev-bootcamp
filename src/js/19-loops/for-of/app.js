// for... of...

const subreddits = ['vtmb', 'javascript', 'webdev', 'pics', 'funny']

/*

 for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

*/

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`);
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geofrrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
];

for(let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for(let char of "hello world") {
    console.log(char);
}
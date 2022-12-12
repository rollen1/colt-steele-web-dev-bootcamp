// for each

// accepts a callback function
// calls the function once per element in the array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function print(element) {
    console.log(element);
}

// print(numbers[0]);
// print(numbers[1]);

// numbers.forEach(print);

numbers.forEach(function (el) {
    console.log(el);
})

for (let el of numbers) {
    if (el % 2 === 0) {
        console.log(el);
    }
}

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    },
]

movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}`);
})
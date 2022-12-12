// arrow functions

// syntactically compact alternative 

/* 

const add = function(x, y) {
    return x + y;
} 

*/

// const add = (x, y) => {
//     return x + y;
// }

const square = (x) => {
    return x * x;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }


// arrow function implicit returns

// even shorter syntax

const rollDie = () => (Math.floor(Math.random() * 6) + 1)

const add = (a, b) => a + b;

//

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

// const newMovies = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// const newMovies = movies.map(movie => (`${movie.title} - ${movie.score / 10}`))

const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))
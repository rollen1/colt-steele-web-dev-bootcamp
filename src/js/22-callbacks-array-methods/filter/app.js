// filter

// creates a new array with all elements that pass the test implemented by the provided function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.filter(n => {
    return n < 10;
});

const movies = [
    {
        title: 'Fight Club',
        score: 88,
        year: 1999
    },
    {
        title: 'Taxi Driver',
        score: 82,
        year: 1976
    },
    {
        title: 'American Psycho',
        score: 76,
        year: 2000
    },
]

// const goodMovies = movies.filter(movie => {
//     return movie.score > 80;
// });

const goodMovies = movies.filter(m => m.score > 80);

// movies.filter(m => m.score > 80).map(m => m.title);
const goodTitles = goodMovies.map(m => m.title);


const badMovies = movies.filter(m => m.score < 80);

const recentMovies = movies.filter(m => m.year > 1990);
// some & every

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

// true, unless you add lower or equal to 75 in the 

exams.every(score => score >= 75)

exams.some(score => score >= 75)

//

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

// false, unless i add a movie later than 2015 in the array
movies.some(movie => movie.year > 2015)
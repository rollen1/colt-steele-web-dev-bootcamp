// reduce

// executes a reducer function on each element of the array, resulting in a single value

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

/*
let total = 0;
for(let price of prices) {
    total += price;
}
console.log(total) 
*/

// const total = prices.reduce((total, price) => {
//     return total + price;
// });


const total = prices.reduce((total, price) => total + price)

const minPrice = prices.reduce((min, price) => {
    if(price < min) {
        return price;
    }
    return min;
});

const maxPrice = prices.reduce((min, price) => {
    if(price > min) {
        return price;
    }
    return min;
});

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
];

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
});

//

const evens = [2, 4, 6, 8];
// another argument adds initial value we would start at (22)
evens.reduce((sum, num) => sum + num, 2);
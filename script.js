"use strict";

const numberOfFilms = +prompt('How many movies did you watch?','');

const prsonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 1;
while (i < 3) {
    let film = prompt(`Step ${i}.1: What's the latest movie you've seen?`,""),
        answer = prompt(`Step ${i}.2: How much would you rate it?`,"");
        if (film !== "" && film !== null && answer !=="" && answer !== null) {
            prsonalMovieDB.movies[film] = answer;
            i++;
        } else {alert('Entered data is invalid!');}   
        
}




console.log(prsonalMovieDB);



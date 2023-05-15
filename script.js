"use strict";

let numberOfFilms;

const prsonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('How many movies did you watch?','');
        while ( this.count =='' ||  this.count == null || isNaN( this.count)) {
            this.count = +prompt('How many movies did you watch?','');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("What's the latest movie you've seen?","").trim(),
                  b = prompt("How much would you rate it?","");
    
                  if (a != "" && a != null && b !="" && b != null && a.length < 50) {
                    this.movies[a] = b;
                } else {
                    alert('Entered data is invalid!');
                    i--;
                } 
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log("quite a few films have been watched");
        } else if (this.count >= 10 && this.count <= 30) {
            console.log("enough movies have been watched");
        } else if (this.count > 30) {
            console.log("you are a movie buff!");
        } else {
            console.log("error!");
        }
    },
    showMyDB: function() {
        if (!this.hidden) {
            console.log(this);
        } 
    },
    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`what is your favorite genre #${i}?`);

            if (genre === "" || genre == null) {
                console.log('incorrect data');
                i--;
            } else {
                this.genres[i - 1] = genre;
            }
        }

        this.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} is ${item} `);
        });
    }
};
// prsonalMovieDB.toggleVisibleMyDB();

// prsonalMovieDB.rememberMyFilms();
// prsonalMovieDB.detectPersonalLevel();
// prsonalMovieDB.writeYourGenres();



"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    
    rememberMyFilms: function() {
        for (let i=0; i<2; i++){
            const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
                  rating = prompt('На сколько оцените его?', '');
        
            if (lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = rating;    
                console.log('Done!');
            } else {
                console.log('Error!');
                i--;
            }          
        }    
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30){
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }    
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },

    writeYourGenres: function() {
        for (let j=1; j<=3; j++) {
            let genre = prompt(`Ваш любимый жанр под номером ${j}`, '');
            if (genre === null && genre === ''){
                console.log('Вы ввели некорректный тип жанра');
                j--;
            } else {
                personalMovieDB.genres[j - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, j) => {
                console.log(`Любимый жанр #${j + 1} - это ${item}`);
            });
    }

};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// detectPersonalLevel();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB();

// personalMovieDB.writeYourGenres();


// personalMovieDB.writeYourGenres();

// console.log(personalMovieDB.genres);


// let user = prompt('What is your name?', '');

// alert(`Hello ${user}!`);
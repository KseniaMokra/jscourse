"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

// let i = 0;
// do {
//     const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//           rating = prompt('На сколько оцените его?', '');

//     if (lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
//         personalMovieDB.movies[lastFilm] = rating;    
//         console.log('Done!');
//     } else {
//         console.log('Error!');
//         i--;
//     }
    
//     i++;
// } while (i < 2);

// while (i < 2){
//     const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//           rating = prompt('На сколько оцените его?', '');

//     if (lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
//         personalMovieDB.movies[lastFilm] = rating;    
//         console.log('Done!');
//     } else {
//         console.log('Error!');
//         i--;
//     }
    
//     i++;
// }



if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);


// let user = prompt('What is your name?', '');

// alert(`Hello ${user}!`);
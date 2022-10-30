/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
const EXPENSIVE_MOVIE = 100000000;

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    if (this.budget > EXPENSIVE_MOVIE) {
      return true;
    }
  }
}

const titanicMovie = new Movie("Titanic", "James Cameron", 200000000);
const hannibalMovie = new Movie("Hannibal", "Ridley Scott", 87000000);

function wasMovieExpensive(movie) {
  movieBudget = "";

  if (movie.wasExpensive()) {
    movieBudget = "was expensive.";
  } else {
    movieBudget = "was not expensive.";
  }

  return movie.title + " - " + movieBudget;
}

console.log(wasMovieExpensive(titanicMovie));
console.log(wasMovieExpensive(hannibalMovie));

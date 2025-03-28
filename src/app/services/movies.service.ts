import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public favoritesMoviesList:BehaviorSubject<Movie[]>=new BehaviorSubject<Movie[]>([])

  addMovieToFavorites(movie:Movie){
    this.favoritesMoviesList.next([...this.favoritesMoviesList.value,movie])
    console.log("addMovieToFavorites")
  }

  removeMovieFromFavorites(movie:Movie){
    const tempFavoriteMoviesList:Movie[]=this.favoritesMoviesList.value.filter(element=>
      element.id!=movie.id
    )

    this.favoritesMoviesList.next(tempFavoriteMoviesList)
    console.log("removeMovieFromFavorites")
  }
}

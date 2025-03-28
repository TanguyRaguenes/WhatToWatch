import { inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly firebaseService:FirebaseService=inject(FirebaseService)

  public favoritesMoviesList:BehaviorSubject<Movie[]>=new BehaviorSubject<Movie[]>([])

  constructor(){
    this.firebaseService.getFavorites().then(element=>{
      this.favoritesMoviesList.next(element)
    })
  }

  addMovieToFavorites(movie:Movie){
    const currentList:Movie[] = this.favoritesMoviesList.value ?? [];
    this.favoritesMoviesList.next([...currentList, movie]);
    this.firebaseService.addFavorites([...this.favoritesMoviesList.value]);
    console.log("addMovieToFavorites");
  }

  removeMovieFromFavorites(movie:Movie){
    const tempFavoriteMoviesList:Movie[]=this.favoritesMoviesList.value.filter(element=>
      element.id!=movie.id
    )

    this.favoritesMoviesList.next(tempFavoriteMoviesList)
    this.firebaseService.addFavorites([...this.favoritesMoviesList.value])
    console.log("removeMovieFromFavorites")
  }
}

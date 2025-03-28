import { Component, inject, OnInit } from '@angular/core';
import { MoviesApiService } from '../../services/movies-api.service';
import { Movie } from '../../interfaces/movie';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {

  private readonly moviesApiService:MoviesApiService=inject(MoviesApiService)
  private readonly moviesService:MoviesService=inject(MoviesService)

  public moviesListToDisplay:Movie[]=[]
  public allMoviesList:Movie[]=[]
  public favoritesMoviesList:Movie[]=[]

  ngOnInit(): void {

    this.moviesApiService.fetchData()

    this.moviesApiService.moviesList.subscribe({
      next: (value) => {
        this.allMoviesList = [...value];
        this.moviesListToDisplay = [...value];
        value.forEach(element => console.log(element));
      }
    });

    this.moviesService.favoritesMoviesList.subscribe({
      next:(value)=>{

        console.log("favoritesMoviesList subscription : ")
        console.log(value)
        this.favoritesMoviesList=[...value]
      }
    })

  }

  public addMovieToFavorites(movie:Movie){
    this.moviesService.addMovieToFavorites(movie)
  }

  public removeMovieFromFavorites(movie:Movie){
    this.moviesService.removeMovieFromFavorites(movie)
  }

  public isMovieInFavoritesList(movie:Movie):boolean{
    const occurence:Movie|null=this.favoritesMoviesList.filter(element=>element.id==movie.id)[0]

    if(occurence!=null){
      return true
    }

    return false
  }

  public displayFavoritesMovies(){
    this.moviesListToDisplay=[...this.favoritesMoviesList]
  }
  public displayAllMovies(){
    this.moviesListToDisplay=[...this.allMoviesList]
  }

}

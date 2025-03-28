import { Component, inject, OnInit } from '@angular/core';
import { MoviesApiService } from '../../services/movies-api.service';
import { Movie } from '../../interfaces/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {

  private readonly moviesApiService:MoviesApiService=inject(MoviesApiService)

  public moviesListToDisplay:Movie[]=[]

  ngOnInit(): void {

    this.moviesApiService.fetchData()

    this.moviesApiService.moviesList.subscribe({
      next: (value) => {
        this.moviesListToDisplay = [...value];
        value.forEach(element => console.log(element));
      }
    });

  }

}

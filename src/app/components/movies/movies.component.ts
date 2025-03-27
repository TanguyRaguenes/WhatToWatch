import { Component, inject, OnInit } from '@angular/core';
import { MoviesApiService } from '../../services/movies-api.service';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {

  private readonly moviesApiService:MoviesApiService=inject(MoviesApiService)

  ngOnInit(): void {
    this.moviesApiService.fetchData()
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { TmdbApiResponse } from '../interfaces/tmdb-api-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  public moviesList:BehaviorSubject<Movie[]>=new BehaviorSubject<Movie[]>([])

  private readonly http:HttpClient=inject(HttpClient)
  private readonly url:string=environment.tmdbUrl
  private readonly  headers = new HttpHeaders({
    'Authorization': `Bearer ${environment.tmdbToken}`
  })

  public fetchData(){

    console.log(environment.tmdbToken)
    console.log(this.headers)

    this.http.get<string>(`${this.url}authentication`
      ,{headers:this.headers}).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => console.log('done')
    });


    this.http.get<TmdbApiResponse>(`${this.url}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`
      ,{headers:this.headers}).subscribe({
        next:(response)=>{
          console.log(response)
          this.UpdateMoviesList(response)
        },
        error: (error) => console.error(error),
        complete: () => console.log('done')
      })
  }

  public UpdateMoviesList(response:TmdbApiResponse){

    this.moviesList.next(response.results)


  }




}

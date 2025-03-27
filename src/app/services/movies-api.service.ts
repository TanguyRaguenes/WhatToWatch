import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  private readonly http:HttpClient=inject(HttpClient)

  public fetchData(){

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.tmdbToken}`
    })

    console.log(environment.tmdbToken)
    console.log(headers)

    this.http.get<string>('https://api.themoviedb.org/3/authentication',{headers}).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => console.log('done')
    });
  }

}

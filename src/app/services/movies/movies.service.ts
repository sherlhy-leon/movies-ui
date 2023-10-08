import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from 'rxjs';
import { Movie } from 'src/app/entities/movie';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly url = environment.moviesApiUrl;

  constructor(private readonly http: HttpClient) { }

  getPlayingNowMovies(): Observable<Movie[]> {
      return this.http.get<{movies: Movie[]}>(`${this.url}/now_playing`).pipe(
        map(val => val.movies)
      );
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<{movies: Movie[]}>(`${this.url}/popular`).pipe(
      map(val => val.movies)
    );
}
}

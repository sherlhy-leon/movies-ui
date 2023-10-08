import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Movie } from 'src/app/entities/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = "http://localhost:3000/movies"
  constructor(private readonly http: HttpClient) { }

  getPlayingNowMovies(): Observable<Movie[]> {
      return this.http.get<Movie[]>(`${this.url}/now_playing`);
  }
}

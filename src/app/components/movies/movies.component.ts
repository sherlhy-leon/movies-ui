import { Component } from '@angular/core';
import { Movie } from 'src/app/entities/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  playingNowMovies$: Observable<Movie[]>;
  constructor(private readonly service: MoviesService) {
    this.getPlayingNow();
  }

  getPlayingNow() {
    this.playingNowMovies$ = this.service.getPlayingNowMovies();
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/entities/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.scss']
})
export class PopularPageComponent {
  movies$: Observable<Movie[]>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movies$ = this.moviesService.getPopularMovies();
  }
}

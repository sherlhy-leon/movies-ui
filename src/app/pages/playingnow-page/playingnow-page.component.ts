import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/entities/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-playingnow-page',
  templateUrl: './playingnow-page.component.html',
  styleUrls: ['./playingnow-page.component.scss']
})
export class PlayingnowPageComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movies$ = this.moviesService.getPlayingNowMovies();
  }
}

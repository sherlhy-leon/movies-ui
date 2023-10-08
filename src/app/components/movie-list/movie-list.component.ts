import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/entities/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  @Input() movies: Movie[] | null = [];
  constructor(private router: Router) {}

  showDetails(movie: Movie){
    this.router.navigateByUrl(`movies/${movie.id}/details`, { state: { movie }});
  }
}

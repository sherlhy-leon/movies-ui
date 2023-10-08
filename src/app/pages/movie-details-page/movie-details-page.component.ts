import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, filter, map, tap, Subscription, switchMap } from 'rxjs';
import { Credits } from 'src/app/entities/credit';
import { Movie } from 'src/app/entities/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss']
})
export class MovieDetailsPageComponent implements OnInit, OnDestroy {
  credits$: Observable<Credits>;
  movie: Movie;
  subscription$: Subscription;
  castNames: string;
  crewNames: string;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.subscription$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      filter((id): id is string => !!id),
      tap(() => this.movie = window.history.state.movie),
      switchMap((movieId) => this.moviesService.getMovieCredits(movieId))
    ).subscribe((credits: Credits) => {
      this.castNames = credits.cast.map(member => member.name).join(", ");
      this.crewNames = credits.crew.map(member => member.name).join(", ");
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  goBack() {
    this.location.back();
  }
}

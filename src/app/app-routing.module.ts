import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayingnowPageComponent } from './pages/playingnow-page/playingnow-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: "movies/playingnow",
    component: PlayingnowPageComponent,
  },
  {
    path: "movies/populars",
    component: PopularPageComponent,
  },
  {
    path: "movies/details",
    component: MovieDetailsPageComponent,
  },
  { path: '',   redirectTo: '/movies/playingnow', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlayingnowPageComponent } from './pages/playingnow-page/playingnow-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayingnowPageComponent,
    PopularPageComponent,
    LoginPageComponent,
    MovieDetailsPageComponent,
    NotFoundPageComponent,
    NavbarComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

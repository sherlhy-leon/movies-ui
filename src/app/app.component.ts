import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-app';

  constructor(private readonly zone: NgZone, private router: Router) {
    // this.zone.run(() => {
    //   this.router.initialNavigation();
    // })
  }
}

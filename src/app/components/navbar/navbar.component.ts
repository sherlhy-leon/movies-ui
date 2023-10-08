import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  title: string = "";
  subscription$: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    this.subscription$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      this.setTitle(this.router.url);
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  setTitle(pathName: string) {
    const route = pathName.split("/");
    const path = route[route.length - 1];
    if (path === "playingnow") {
      this.title = "Playing Now"
    }
    else if (path === 'popular') {
      this.title = "Populars";
    }
    else {
      this.title = "Details";
    }
  }
}

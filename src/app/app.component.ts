import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLogin: boolean = false;
  public sideBarOpen: boolean = true;

  constructor(
    private router: Router
  ) {
    this.checkRoute();
  }

  private checkRoute(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.isLogin = event['url'] !== '/login';
    });
  }

  public sideBarToggle(ev: Event): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

import { Component, OnInit } from '@angular/core';
import { delay, filter } from 'rxjs/operators';
import { AuthService } from './shared/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLogin: boolean = false;
  public sideBarOpen: boolean = true;
  private currentUrl: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.currentUrl = Boolean((event['url'] !== '/login') && (event['url'] !== '/registration')) ;
      this.isLogin = Boolean(localStorage.getItem('user')) && this.currentUrl;
    });
  }

  public ngOnInit(): void {
    this.authService.watchStorage().pipe(
      delay(0)
    ).subscribe(
      (info) => {
        this.isLogin = Boolean(localStorage.getItem('user')) && this.currentUrl;
      }
    );
  }

  public sideBarToggle(ev: Event): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

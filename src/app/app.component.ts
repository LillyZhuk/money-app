import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLogin: boolean = false;
  public sideBarOpen: boolean = true;

  constructor(
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.isLogin = Boolean(localStorage.getItem('user'));

    this.authService.watchStorage().pipe(
      delay(0)
    ).subscribe(
      (info) => {
        this.isLogin = Boolean(localStorage.getItem('user'));
      }
    );
  }

  public sideBarToggle(ev: Event): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

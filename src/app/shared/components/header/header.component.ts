import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public title: string;

  @Output() public toggleSideBar: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  public toggleSidebar(): void {
    this.toggleSideBar.emit();

    of(true).pipe(
      delay(30),
      tap(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }),
    );
  }

  public logout(): void {
    this.authService.removeItem('user');
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}

import { BehaviorSubject } from 'rxjs';

export class AuthService {

  public isLogin = new BehaviorSubject<boolean>(false);

  private isAuthenticated = false;

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}

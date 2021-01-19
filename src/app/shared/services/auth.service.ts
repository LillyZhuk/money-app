import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface IStorageInfo {
  key: string;
  value: any;
}

export class AuthService {

  public isLogin = new BehaviorSubject<boolean>(false);

  private isAuthenticated = false;
  private storageSub: Subject<IStorageInfo> = new Subject<IStorageInfo>();

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

  public watchStorage(): Observable<IStorageInfo> {
    return this.storageSub.asObservable();
  }

  public setItem(key: string, value: any): void {
    this.storageSub.next({
      key,
      value
    } as IStorageInfo);

    localStorage.setItem(key, value);
  }

  public removeItem(key: string): void {
    this.storageSub.next({
      key,
      value: ''
    });

    localStorage.removeItem(key);
  }

}

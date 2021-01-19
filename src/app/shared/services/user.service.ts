import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  public getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`users?email=${email}`);
  }

  public createNewUser(user: User): Observable<User> {
    return this.http.post<User>(`users`, user);
  }
}

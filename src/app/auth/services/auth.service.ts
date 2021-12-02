import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

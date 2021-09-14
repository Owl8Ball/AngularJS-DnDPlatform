import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  createUser() {
    //this.http.post(this.apiUrl + '/users/new')
  }

  checkUser(id: string) {
    this.http.get(this.apiUrl + '/users/new/' + id)
  }
}

import { HttpClient } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/User';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}
  signup(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.API_URL + 'users', data);
  }
  signin(data: any) {
    return this.http.post(this.API_URL + 'users', data);
  }
}
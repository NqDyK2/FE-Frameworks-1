import { Injectable } from '@angular/core';
import data from '../data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {IWorks} from "../../models/Works"
@Injectable({
  providedIn: 'root'
})
export class WorksService {

  API_URL =  `http://localhost:3000/works/`

  constructor(
    private http: HttpClient
  ) { }

  getWorks(id: any): Observable<IWorks> {
    // return data.find(item => item.id === id);
    return this.http.get<IWorks>(`${this.API_URL}/${id}`);
  }
  getWorksList(): Observable<IWorks[]> {
    return this.http.get<IWorks[]>(`http://localhost:3000/works`);
  }
  removeWorks(id:number):  Observable<IWorks[]>{
    return this.http.delete<IWorks[]>(`http://localhost:3000/works/${id}`)
  }
  addWorks(works: IWorks): Observable<IWorks[]> {
    return this.http.post<IWorks[]>(`http://localhost:3000/works`,works)
  }
  updateWorks(works: IWorks): Observable<IWorks> {
    return this.http.put<IWorks>(`${this.API_URL}/${works.id}`, works);
  }
}

// B1: Khai báo HttpClientModule trong app.module.ts
// B2: Khai báo HttpClient trong services
// B3: Inject services HttpClient
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../models/User';



@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  geturl: string = `${environment.baseUrl}/search/`;

  constructor(private http: HttpClient) { }

  search(searchBar: string): Observable<User[]> {
    let searchUrl = this.geturl + searchBar
    console.log("Got to search bar service")
    console.log(searchUrl)
    return this.http.get<User[]>(`${searchUrl}`, { headers: environment.headers, withCredentials: environment.withCredentials })
  }
}

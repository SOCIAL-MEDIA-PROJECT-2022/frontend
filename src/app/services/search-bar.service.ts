import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  geturl: string = `${environment.baseUrl}/search/`;

  constructor(private http: HttpClient) { }

  search(searchBar: string): Observable<any> {
    console.log(searchBar)
    let searchUrl = this.geturl + searchBar
    return this.http.get<any>(`${searchUrl}`, { headers: environment.headers, withCredentials: environment.withCredentials })
  }
}

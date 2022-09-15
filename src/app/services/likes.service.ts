import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import Likes from '../models/Likes';
import Post from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  postUrl: string = `${environment.baseUrl}/post`

  constructor(private http: HttpClient) { }

  updateLikes(likes : Likes): Observable<Likes> {
    return this.http.patch<Likes>(`${this.postUrl}`, likes, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
}

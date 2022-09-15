import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Post from '../models/Post';
import Request from '../models/Request';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl: string = `${environment.baseUrl}/post`

  constructor(private http: HttpClient) { }

  getAllPosts(request:Request): Observable<Post[]> {
    return this.http.post<Post[]>(`${this.postUrl}`,request, {headers: environment.headers, withCredentials: environment.withCredentials} )
  }

  upsertPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.postUrl}`, post, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
}

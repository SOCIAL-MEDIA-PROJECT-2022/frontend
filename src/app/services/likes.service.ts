import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { PostComponent } from '../components/post/post.component';
import Likes from '../models/Likes';
import Post from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  postUrl: string = `${environment.baseUrl}/post`

  constructor(private http: HttpClient) { }

  updateLikes(id: number, id2: number): Observable<Post> {
    const likes = {postId:id, userId:id2};
    return this.http.patch<Post>(`${this.postUrl}`, likes, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
  
}

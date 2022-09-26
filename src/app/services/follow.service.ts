import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import Follower from '../models/Follower';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  posturl: string = `${environment.baseUrl}/followers`;
  currentFollowers: Follower[];

  constructor(private http: HttpClient) {
  }

  follow(id: number, email: string): Observable<any> {
    let payload = {id:id, email: email}
    return this.http.patch<any>(`${this.posturl}/follow`, payload, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    })

  }

  unfollow(id: number, email: string) {
    let payload = {id:id, email: email}
    return this.http.patch<any>(`${this.posturl}/unfollow`,payload, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    })
  }

  getFollowers(id:number):Observable<Follower[]> {
    let getUrl = this.posturl +"/"+ id;
    let res = this.http.get<Follower[]> (getUrl,{
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
    res.subscribe((data) =>{
      this.currentFollowers = data;
    })
    return res;
  }


}

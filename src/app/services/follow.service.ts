import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import Follower from '../models/Follower';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  posturl: string = `${environment.baseUrl}/follow`;

  constructor(private http: HttpClient) {
  }

  follow(follower: Follower): Observable<any> {
    console.log("made it here")
    console.log(follower)
    console.log(this.posturl)
    return this.http.patch<any>(`${this.posturl}`, follower, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    })

  }


}

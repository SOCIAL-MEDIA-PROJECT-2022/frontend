import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import User from '../models/User';
import {Observable} from 'rxjs';
import Profile from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile:Profile;
  profileUrl: string = `${environment.baseUrl}/profile`;

  constructor(private http: HttpClient) {
  }

  update(profile: Profile): Observable<Profile> {
    console.log("Calling Update with: ");
    console.log(profile);
    const res = this.http.patch<Profile>(`${this.profileUrl}/update`, profile, {
      headers: environment.headers, withCredentials: environment.withCredentials,
    });
    res.subscribe((response) => {
        this.profile = response;
    });
    return res;
  }

  getProfile(id: number): Observable<Profile> {
    let requestUrl: string = this.profileUrl + "/" + id
    let res = this.http.get<Profile>(requestUrl, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    })
    res.subscribe( (data) => {
      this.profile = data;
    })
    return res;
  }
}

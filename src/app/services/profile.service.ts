import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import User from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userUrl: string = `${environment.baseUrl}/user`;

  constructor(private http: HttpClient) { } 

  update(user: User): Observable<User> {
    console.log(user);
    return this.http.put<any>(`${this.userUrl}/update`, user, {
      headers: environment.headers, withCredentials: environment.withCredentials
    });
  }

}

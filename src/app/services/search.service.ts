import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchUsers: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

}

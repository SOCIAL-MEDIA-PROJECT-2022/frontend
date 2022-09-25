import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchedUsers: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

}

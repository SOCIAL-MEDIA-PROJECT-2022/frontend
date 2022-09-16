import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchUsers:User[]


  constructor() { }

  getSearchUsers():User[]{
    return this.searchUsers
  }
  setSearchUser(user:User[]):void{
    this.searchUsers = user
  }
}

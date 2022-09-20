import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Profile from 'src/app/models/Profile';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import Proile from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css'],
})

export class MyCardComponent implements OnInit {
  user: User = {} as User;
  profile: Profile = {} as Profile;
  memaw: String = 'Ethana';
  pepaw: String = "McGillicus"
  pemale: String = "info@mcgilli-cutty.com";


  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
  }
}

/*
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MyCardComponent {
  user: User = {} as User;
  posts: any;
  private url = 'http://jsonplaceholder.typicode.com/posts' ;
  memaw: String = 'Ethana';
  pepaw: String = "McGillicus"
  pemale: String = "info@mcgilli-cutty.com";

constructor (private http: HttpClient) {
  http.get(this.url)
  .subscribe(response => {
    this.posts = response;
  });
}

createPost(input:  HTMLInputElement) {
  let post = { title: input.value };
  this.http.post(this.url, JSON.stringify(post))
  .subscribe(response => {
    console.log(response);
});
}
*/
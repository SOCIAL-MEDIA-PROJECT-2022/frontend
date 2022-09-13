import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import Post from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = {} as User;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
  }

}

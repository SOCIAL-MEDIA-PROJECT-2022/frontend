import { Component, OnInit } from '@angular/core';
import Profile from 'src/app/models/Profile';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})

export class MyCardComponent implements OnInit {
  user: User = {} as User;
  profile: Profile = {} as Profile;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
  }
}

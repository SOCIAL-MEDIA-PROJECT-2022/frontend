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

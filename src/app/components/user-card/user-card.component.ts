import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  user: User = {} as User;
  

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
  }

  
}

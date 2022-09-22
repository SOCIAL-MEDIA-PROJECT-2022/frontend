import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  user: User = {} as User;

  constructor(private authService: AuthService, private dMode : DarkModeService) { }
  matColorPostCard: boolean
  ngOnInit(): void {
    this.user = this.authService.currentUser

    this.dMode.theme.subscribe(
      value => {
        this.matColorPostCard = value
      }
    )
  }

}

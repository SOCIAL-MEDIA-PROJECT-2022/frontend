import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import Profile from 'src/app/models/Profile';
import User from 'src/app/models/User';
import {AuthService} from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import {MyCardComponent} from '../my-card/my-card.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit { user: User = {} as User;
profile: Profile = {} as Profile;

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private profileService: ProfileService) {
  }

  ngOnInit(): void { this.user = this.authService.currentUser;
    this.profileService.getProfile(this.authService.currentUser.id).subscribe(
      (response) => {
        this.profile = response
      }
    )

  }
  home() {
    this.router.navigate(['post-feed'])
  }

  openProfile() {
    const dialogCfg = new MatDialogConfig();
    dialogCfg.autoFocus = true;
    dialogCfg.height="750x"
    dialogCfg.width="950px"
    this.dialog.open(MyCardComponent, dialogCfg);  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
  resetPassword(){
    this.router.navigate(['reset-password']);
  }
}

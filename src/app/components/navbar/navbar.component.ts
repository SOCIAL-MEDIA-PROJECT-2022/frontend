import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {MyCardComponent} from '../my-card/my-card.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  home() {
    this.router.navigate(['post-feed'])
  }

  otherCards() {
    this.router.navigate(['found-users'])
  }

  openMyCard() {
    const dialogCfg = new MatDialogConfig();
    dialogCfg.autoFocus = true;


    this.dialog.open(MyCardComponent, dialogCfg);
  }

  profile() {
    this.router.navigate(['profile']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}

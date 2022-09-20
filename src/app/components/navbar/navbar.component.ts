import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MyCardComponent } from '../my-card/my-card.component';
import { PostFeedPageComponent } from '../post-feed-page/post-feed-page.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(
    private authService: AuthService, 
    private router: Router,
    public dialog: MatDialog) { }
  
  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  home(){
    this.router.navigate(['post-feed'])
  }

  // openTestFeed() {
  //   this.dialog.open(PostFeedPageComponent);
  // }

  openMyCard() {
    const dialogCfg = new MatDialogConfig();
    // dialogCfg.disableClose= true;
    dialogCfg.autoFocus = true;

    this.dialog.open(MyCardComponent, dialogCfg);
  }

  profile(){
    this.router.navigate(['profile']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}

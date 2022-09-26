import {Component, OnInit} from '@angular/core';
import {SearchService} from 'src/app/services/search.service';
import User from 'src/app/models/User';
import {AuthService} from '../../services/auth.service';
import {SearchCardComponent} from '../search-card/search-card.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-search-feed-page',
  templateUrl: './search-feed-page.component.html',
  styleUrls: ['./search-feed-page.component.css'],
})
export class SearchFeedPageComponent implements OnInit {
  users: User[];

  constructor(
    private searchService: SearchService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.searchService.searchedUsers.subscribe((value) => {
      this.users = value;
    });
  }

  openUserModel(user: User) {
    const dialogCfg = new MatDialogConfig();
    dialogCfg.autoFocus = true;
    dialogCfg.width = '75%'
    dialogCfg.data = user;
    this.dialog.open(SearchCardComponent, dialogCfg);
  }
}

import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchService } from 'src/app/services/search.service';
import User from 'src/app/models/User';
import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'app-search-feed-page',
  templateUrl: './search-feed-page.component.html',
  styleUrls: ['./search-feed-page.component.css']
})
export class SearchFeedPageComponent implements OnInit {

  users: User[]
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchUsers.subscribe(
      value =>{
        this.users = value;
      }
    )
  }
}

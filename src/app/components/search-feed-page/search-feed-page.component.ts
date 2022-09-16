import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchService } from 'src/app/services/search.service';
import User from 'src/app/models/User';

@Component({
  selector: 'app-search-feed-page',
  templateUrl: './search-feed-page.component.html',
  styleUrls: ['./search-feed-page.component.css']
})
export class SearchFeedPageComponent implements OnInit {

  users:User[]
  constructor(private searchService:SearchService ) { }

  ngOnInit(): void {
    this.users = this.searchService.getSearchUsers()
  }

}

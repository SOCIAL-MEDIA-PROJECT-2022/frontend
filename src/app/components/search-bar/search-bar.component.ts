import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchBarService } from 'src/app/services/search-bar.service';
import User from 'src/app/models/User'
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm = new FormGroup({
    email: new FormControl(''),
  })


  constructor(private searchBarService: SearchBarService, private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(e: any): void {
    e.preventDefault()

    this.searchBarService.search(this.searchForm.value.email || "")
      .subscribe(
        (response) => {
          this.searchService.setSearchUser(response)
          this.router.navigate(['user-search-results'])
        })
  }

  searchFeed() {
    this.router.navigate(['user-search-results'])
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchBarService } from 'src/app/services/search-bar.service';
import User from 'src/app/models/User'
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm = new FormGroup({
    email: new FormControl(''),
  })

  
  constructor(private searchBarService:SearchBarService, private searchService:SearchService ) { }

  ngOnInit(): void {
  }

  onSubmit(e: any): void {
    e.preventDefault()
    this.searchBarService.search(this.searchForm.value.email || "" )
    .subscribe(
      (response) => {
        this.searchService.setSearchUser(response) 
        
      })
      

}

}

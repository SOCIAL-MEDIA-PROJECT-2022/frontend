import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import User from "../../models/User";
import Profile from "../../models/Profile";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  profile:Profile = {} as Profile;
  constructor(@Inject(MAT_DIALOG_DATA) public data: User, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile(this.data.id).subscribe(
      (response) =>{
        this.profile = response
      }
    )
  }

}

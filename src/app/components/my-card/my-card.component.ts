import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Profile from 'src/app/models/Profile';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import Proile from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})

export class MyCardComponent implements OnInit {
  user: User = {} as User;
  profile: Profile = {} as Profile;
  showEdit: Boolean = false;
  showInfo: Boolean = true;
  isSubmitted: Boolean = false;

  profileForm = new FormGroup({
       firstName: new FormControl('', [Validators.email, Validators.required]),
       lastName: new FormControl('', [Validators.email, Validators.required]),
       email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    //     password: new FormControl(''),
      });

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    this.profileService.getProfile(this.authService.currentUser.id).subscribe(
      (response) => {
        this.profile = response
        //console.log(this.profile);
        //return this.profile;
      }
    )
    console.log(this.profile);
    //call in inIt
    
  }

  getUserProfile(){
    this.profileService.getProfile(this.user.id).subscribe(
      (response) => {
        this.profile = response
        console.log(this.profile);
        return this.profile;
      }
    )

  }

  onSubmit(e: any): void {
         e.preventDefault();
         //console.log("hello");
        this.profileService.update(this.user).subscribe();
       }

  showEditProfile(){
    this.showEdit = !this.showEdit; 
    this.showInfo = !this.showInfo;
    this.user.firstName = this.user.firstName;
    console.log("clicked")
  }

  test(){
    console.log("test2");
    this.showEditProfile();
    }


}


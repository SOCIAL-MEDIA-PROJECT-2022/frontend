import {Component, OnInit} from '@angular/core';
import Profile from 'src/app/models/Profile';
import User from 'src/app/models/User';
import {AuthService} from 'src/app/services/auth.service';
import {ProfileService} from 'src/app/services/profile.service';
import {FormControl, FormGroup, Validators,} from '@angular/forms';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})

export class MyCardComponent implements OnInit {
  user: User = {} as User;
  profile: Profile = {} as Profile;
  edit: boolean = false;
  showInfo: boolean = true;
  isSubmitted: boolean = false;
  placeholder:String = "Placeholder"

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.email, Validators.required]),
    lastName: new FormControl('', [Validators.email, Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  });

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {
  }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    this.profile =this.profileService.profile;
  }

  showEditProfile() {
    if(this.edit) {
      console.log(this.profile);
      console.log("we will call update here");
      this.profileService.update(this.profile);
    }
    this.edit = !this.edit;
  }
}


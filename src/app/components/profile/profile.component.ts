import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import Post from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import Profile from 'src/app/models/Profile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {
  user: User = {} as User;
  profile: Profile = {} as Profile;
  editSuccess:boolean = false;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.currentUser;
  }

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email]),
    password: new FormControl(''),
    aboutMe: new FormControl('', Validators.required)
  });

  error_message: string;

  onSubmit(e: any): void {
    e.preventDefault();
    console.log(this.user);
    
    this.profileService.update(this.user).subscribe((response) => {
      if(response.status == 200) {
        this.error_message = 'Succcess!';
      }
    });
    this.editSuccess=true;
    this.onClick();
    
  }

  @Output("test") test: EventEmitter<any> = new EventEmitter();
  onClick() {
      // Send your form
      this.test.emit("test");
      console.log("test");
   }

}

import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import Post from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = {} as User;

  constructor(private authService: AuthService, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.user = this.authService.currentUser;
  }

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  
  
  onSubmit(e: any): void {
    e.preventDefault();
    this.profileService
      .update(this.user)
      .subscribe();
  }
  
}

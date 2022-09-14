import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import Post from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = {} as User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.currentUser;
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit(e: any): void {
    e.preventDefault();
    this.authService
      .update(
        this.profileForm.value.firstName || '',
        this.profileForm.value.lastName || '',
        this.profileForm.value.email || '',
        this.profileForm.value.password || ''
      )
      .subscribe((response) => {
        this.user=response;
      });
  }
}

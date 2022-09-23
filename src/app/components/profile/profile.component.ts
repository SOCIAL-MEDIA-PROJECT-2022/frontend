import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import User from 'src/app/models/User';
import {AuthService} from 'src/app/services/auth.service';
import {FormControl, FormGroup, Validators,} from '@angular/forms';
import {ProfileService} from 'src/app/services/profile.service';
import Profile from 'src/app/models/Profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {
  user: User = {} as User;
  @Input() profile: Profile = {} as Profile;
  editSuccess: boolean = false;
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
    aboutMe: new FormControl('', Validators.required),
    hobbies: new FormControl('', Validators.required),
    somethingElse: new FormControl('', Validators.required),
    profilePic: new FormControl('', Validators.required)
  });
  error_message: string;
  @Output("test") test: EventEmitter<any> = new EventEmitter();

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {
  }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    console.log(this.profile);
  }

  onSubmit(e: any): void {
    e.preventDefault();
    console.log(this.user);

    this.profileService.update(this.user).subscribe((response) => {
      if (response.status == 200) {
        this.error_message = 'Succcess!';
      }
    });
    this.editSuccess = true;
    this.onClick();

  }

  onClick() {
    // Send your form
    this.test.emit("test");
    console.log("test");
  }

}


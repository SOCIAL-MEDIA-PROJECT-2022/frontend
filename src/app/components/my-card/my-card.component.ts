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
  showEdit: boolean = false;
  showInfo: boolean = true;
  isSubmitted: boolean = false;

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
    this.profileService.getProfile(this.authService.currentUser.id).subscribe(
      (response) => {
        this.profile = response
      }
    )
  }

  onSubmit(e: any): void {
    e.preventDefault();
    this.profileService.update(this.user).subscribe();
  }

  showEditProfile() {
    this.showEdit = !this.showEdit;
    let name = document.getElementById("name");
    let profilePic =   document.getElementById("my-card-pic");
    let aboutMe =   document.getElementById("about-me");
    let hobbies = document.getElementById("hobbies");
    let interesting = document.getElementById("interesting-fact");
    let placeholder = document.getElementById("placeholder");
    if(this.showEdit){
      // @ts-ignore
      name.setAttribute('contenteditable','true');
      // @ts-ignore
      profilePic.setAttribute('contenteditable','true');
      // @ts-ignore
      aboutMe.setAttribute('contenteditable','true');
      // @ts-ignore
      hobbies.setAttribute('contenteditable','true');
      // @ts-ignore
      interesting.setAttribute('contenteditable','true');
      // @ts-ignore
      placeholder.setAttribute('contenteditable','true');
    }else{
      //@ts-ignore
      name.setAttribute('contenteditable','false');
      // @ts-ignore
      profilePic.setAttribute('contenteditable','false');
      // @ts-ignore
      aboutMe.setAttribute('contenteditable','false');
      // @ts-ignore
      hobbies.setAttribute('contenteditable','false');
      // @ts-ignore
      interesting.setAttribute('contenteditable','false');
      // @ts-ignore
      placeholder.setAttribute('contenteditable','false');
    }

    console.log("clicked");
  }

  test() {
    console.log("test2");
    this.showEditProfile();
  }

}


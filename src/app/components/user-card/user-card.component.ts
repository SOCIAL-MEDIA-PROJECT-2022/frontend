import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import Follower from 'src/app/models/Follower';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  user: User = {} as User;
  follow: String = "Follow";

  constructor(private authService: AuthService, private followService: FollowService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
  }

  isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  unFollow() {
    //setProperty( "name of the property you are changing", the change)
    const element: HTMLElement | null = document.getElementById('follow-button');
    if (element) {
      let state: string;
      let follow: Follower;

      if (this.follow == "Unfollow") {
        //this.follow = "Follow";
        state = "unfollow";
        this.follow = "Follow";
        element.style.setProperty("color", "green");
        this.authService

      }
      //call two methods 1. make call to follow API 2. make call to unfollow API
      //send two user ID's, logged-in userID and username of user we are following/wanting to follow
      // username over ID, bc security
      //send currently logged-in user ID, username of potential follow request, and state of button

      else {
        //this.follow = "Unfollow";
        this.follow = "Unfollow";
        element.style.setProperty("color", "red");
        state = "follow";
      }

      follow = <Follower>({ id: this.authService.currentUser.id, email: this.user.email, state: state })

      this.followService.follow(follow);


    }
  }
}

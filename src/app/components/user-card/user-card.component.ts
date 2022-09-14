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
    //this.follow = "Follow";
  }

  isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  unFollow() {
    //setProperty( "name of the property you are changing", the change)
    const element: HTMLElement | null = document.getElementById('follow-button');
    if (element) {
      var state: string;
      var follow: Follower;

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
    //ternary operator to set text for element 
    //element.innerText = (element.innerText == "Follow") ? "Unfollow" : "Follow" (gen idea, might not work but good jumping point)

  }

  /*const followBtn = document.getElementById('follow-button');

  followBtn.addEventListener('click', function unFollow(): void {
    btn.style.backgroundColor = 'red';
    btn.style.color = 'white';
  });*/
}



/*let unFollow = () => {
  let btn = document.getElementById('follow-button');
    color: 'red';     text: "Unfollow";     border: 'red';
    btn.innerText = "Unfollow";
    btn.
}*/
//let btn = document.getElementById('followButton');


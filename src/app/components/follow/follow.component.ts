import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FollowService} from "../../services/follow.service";
import User from "../../models/User";
import Follower from "../../models/Follower";

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  user: User;
  state: string;
  follower: Follower;

  constructor(private authService: AuthService, private followService: FollowService) {
  }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    this.state = "Follow";
  }

  follow(): void {
    const element: HTMLElement | null = document.getElementById('follow-button');
    if (element) {
      if (this.state == "unfollow") {
        this.state = "follow";
        element.style.setProperty("color", "green");
        element.innerText = "Follow"
      } else {
        this.state = "unfollow";
        element.style.setProperty("color", "red");
        element.innerText = "Unfollow"
      }

      this.follower = <Follower>({id: this.authService.currentUser.id, email: this.user.email, state: this.state})
      console.log(this.follower)
      this.followService.follow(this.follower).subscribe();
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
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
  @Input() followName: string;
  constructor(private authService: AuthService, private followService: FollowService) {
  }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    for (let f of this.followService.currentFollowers) {
      if (f.email === this.followName)
        this.state = "Unfollow"
      else
        this.state = "Follow"
    }
  }


  follow(): void {
    const element: HTMLElement | null = document.getElementById('follow-button');
    if (element) {
      if (this.state == "Unfollow") {
        element.style.setProperty("color", "green");
        this.followService.unfollow(this.authService.currentUser.id,this.followName).subscribe();
        this.state = "Follow";
      } else {
        this.state = "Unfollow";
        this.followService.follow(this.authService.currentUser.id, this.followName).subscribe();
        element.style.setProperty("color", "red");
        element.innerText = "Unfollow"
      }
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FollowService} from "../../services/follow.service";
import User from "../../models/User";

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
    const element: HTMLElement | null = document.getElementById('follow-button');
    this.user = this.authService.currentUser;

    if(this.followService.currentFollowers.length == 0){
      this.state = "Follow";
      if (element) element.style.setProperty("color", "green");
      return;
    }

    for (let f of this.followService.currentFollowers) {
      if (f.email === this.followName){
        this.state = "Unfollow";
        if (element) element.style.setProperty("color", "red");
      }
      else{
        this.state = "Follow";
        if (element) element.style.setProperty("color", "green");
        break;
      }
    }
  }


  follow(): void {
    const element: HTMLElement | null = document.getElementById('follow-button');
    if (element) {
      if (this.state == "Unfollow") {
        this.state = "Follow";
        element.style.setProperty("color", "green");
        this.followService.unfollow(this.authService.currentUser.id, this.followName).subscribe();
      } else {
        this.state = "Unfollow";
        element.style.setProperty("color", "red");
        this.followService.follow(this.authService.currentUser.id, this.followName).subscribe();
      }
    }
  }
}

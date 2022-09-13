import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  user: User = {} as User;
  follow: String = "Follow";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    //this.follow = "Follow";
  }

  isLoggedIn(){
    return this.authService.isAuthenticated();
  }

  unFollow() {
    //setProperty( "name of the property you are changing", the change)
    const element:HTMLElement | null = document.getElementById('follow-button');
    if (element) {
      if (this.follow == "Unfollow"){
        //this.follow = "Follow";
        this.follow = "Follow";
        element.style.setProperty("color", "green");
      }
      else{
      //this.follow = "Unfollow";
      this.follow = "Unfollow";
      element.style.setProperty("color", "red");
    }

    }
    //trnary operator to set text for element 
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


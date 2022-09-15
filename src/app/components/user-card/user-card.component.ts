import { Component, OnInit, SimpleChanges } from '@angular/core';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  user: User = {} as User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser
  }
  


  ngOnChanges(): void {
    this.user = this.authService.currentUser
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   for (const user_info in changes) {
  //     const umm = changes[this.user.firstName];
  //     const hmm = changes[this.user.lastName];
  //     const emm = changes[this.user.email];
  //   }

}

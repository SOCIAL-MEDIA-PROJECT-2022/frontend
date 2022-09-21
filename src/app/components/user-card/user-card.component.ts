import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button'; 
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { CardService } from 'src/app/services/card-service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit {

  constructor (private cardService: CardService) {

    }

    card: {
      firstName: string, 
      lastName: string, 
      email:	string,	
      aboutMe: string, 
      topTopics:	string, 
      proPict:	string
  }

  ngOnInit(): void {
    this.cardService.onShowCardClicked.subscribe((data: {
      firstName: string, 
      lastName: string, 
      email:	string,	
      aboutMe: string, 
      topTopics:	string, 
      proPict:	string
  }) => {this.card = data;})
  }

}

import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card-service';


@Component({
  selector: 'app-found-users',
  templateUrl: './found-users.component.html',
  styleUrls: ['./found-users.component.css'],
  providers: [CardService]
})
export class FoundUsersComponent implements OnInit {

  constructor (private cardService: CardService) {
    
  }

  ngOnInit(): void {
  }

}

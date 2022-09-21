import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card-service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private cardService: CardService) { }

  cards: {
    firstName: string, 
    lastName: string, 
    email:	string,	
    aboutMe: string, 
    topTopics:	string, 
    proPict:	string
  }[] = [];

  ngOnInit(): void {
    this.cards = this.cardService.cards;
  }

  showCard (card: {
    firstName: string, 
    lastName: string, 
    email:	string,	
    aboutMe: string, 
    topTopics:	string, 
    proPict:	string
  }) {
    this.cardService.showCardModal(card);
  }
}

// openMyCard() {
//   this.dialog.open(MyCardComponent);
// }

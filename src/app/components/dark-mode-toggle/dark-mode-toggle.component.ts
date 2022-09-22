import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})


export class DarkModeToggleComponent implements OnInit {

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-mode');
    
    this.dMode.theme.next(!this.dMode.theme.value);
    
    /*let elementsToChange = Array.from(document.getElementsByClassName("alternative"));
    if(elementsToChange){
      for(let i =0; i < elementsToChange.length; i++){
        const elementToChange = elementsToChange[i];
        if(elementToChange instanceof HTMLElement){elementToChange.style.setProperty("color","white")}
      
    }*/
  
  }
  constructor(private dMode : DarkModeService ) {}

  ngOnInit(): void {
    
  }


}

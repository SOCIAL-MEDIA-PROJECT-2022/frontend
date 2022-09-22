import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})


export class DarkModeToggleComponent implements OnInit {
  
  checkbox : HTMLInputElement | null;

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-mode');
    
    this.dMode.theme.next(!this.dMode.theme.value);
    
    // this.checkBox();
  }

  constructor(private dMode : DarkModeService ) {}

  ngOnInit(): void {
    this.checkbox = document.getElementById("dark") as HTMLInputElement | null; 
    this.dMode.theme.subscribe(
      value => {
        if(this.checkbox){
          this.checkbox.checked = value;
        }
      }
    )
  }


}

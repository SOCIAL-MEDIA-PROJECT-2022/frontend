import {Component, OnInit} from '@angular/core';
import {DarkModeService} from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})


export class DarkModeToggleComponent implements OnInit {

  checkbox: HTMLInputElement | null;

  constructor(private dMode: DarkModeService) {
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-mode');

    this.dMode.theme.next(!this.dMode.theme.value);

  }

  ngOnInit(): void {
    this.checkbox = document.getElementById("dark") as HTMLInputElement | null;
    this.dMode.theme.subscribe(
      value => {
        if (this.checkbox) {
          this.checkbox.checked = value;
        }
      }
    )
  }


}

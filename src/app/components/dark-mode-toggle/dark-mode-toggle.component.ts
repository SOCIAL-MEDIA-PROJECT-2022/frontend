import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})


export class DarkModeToggleComponent implements OnInit {

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-mode');
  }

  constructor() { }

  ngOnInit(): void {
  }


}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  constructor(private authService: AuthService, private router: Router, private dMode : DarkModeService) { }
  matColorPostLogin : boolean
  ngOnInit(): void {
    this.dMode.theme.subscribe(
      value => {
        this.matColorPostLogin = value
      }
    )
  }

  onSubmit(e: any): void {
    e.preventDefault();
    this.authService
      .login(
        this.loginForm.value.email || '',
        this.loginForm.value.password || ''
      )
      .subscribe((response) => {
        this.authService.currentUser = response;
        this.router.navigate(['post-feed']);
      });
  }

  register(): void {
    this.router.navigate(['register']);
  }
}

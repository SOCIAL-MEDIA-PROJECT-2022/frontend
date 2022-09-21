import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  user: User = {} as User;
  constructor(private authService: AuthService, private router: Router) {}

  resetForm = new FormGroup({
    npassword: new FormControl(''),
    cpassword: new FormControl(''),
  });
  error_message: string;

  ngOnInit(): void {
    this.user = this.authService.currentUser;
  }
  onSubmit(e: any): void {
    e.preventDefault();
    if (this.resetForm.value.npassword === this.resetForm.value.cpassword) {
      console.log(this.user.email);
      this.authService
        .resetpassword(this.user.email, this.resetForm.value.npassword || '')
        .subscribe((response) => {
          if (response.status == 200) {
            this.error_message = 'Success!';
          }
        });
    } else {
      this.resetForm.setErrors({ error: true });
      this.error_message = "Passwords don't match";
    }
  }
}

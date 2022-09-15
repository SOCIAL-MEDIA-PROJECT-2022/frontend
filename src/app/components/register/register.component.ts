import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)});   //, { validators: this.confirmPasswordValidator }

    // confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    //   const password = control.get('password');
    //   const confirmPassword = control.get('confirmPassword');
    //   return password && confirmPassword && password.value === confirmPassword.value ? { confirmPassword: true } : null;
    // };
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(e: any): void {
    e.preventDefault()
    this.authService.register(this.registerForm.value.firstName || "", this.registerForm.value.lastName || "", this.registerForm.value.email || "", this.registerForm.value.password || "")
      .subscribe(
        (response) => {
          this.router.navigate(['login'])
        }
      )
  }
}


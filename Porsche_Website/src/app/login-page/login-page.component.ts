import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/Firebase/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup;

  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required]),
      rememberMe: this.formBuilder.control(false)
    });
  }

  getcontrolName(controlName: string) {
    return this.loginForm.get(controlName);
  }

  async onSubmitForm() {
    if (this.loginForm.valid) {
      try {
        await this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
        this.router.navigate(['/home']);
      } catch (error: any) {
        this.errorMessage = 'Please check your email and password';
      }
    }
  }

}

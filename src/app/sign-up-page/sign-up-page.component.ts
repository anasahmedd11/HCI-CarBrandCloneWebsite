import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/Firebase/auth.service';
import { dynamicForbiddenUserNameValidator } from '../CustomValidations/username.validator';
import { confirmPasswordValidator } from '../CustomValidations/passwordConfirmation.validator';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
})
export class SignUpPageComponent {
  signUpForm: FormGroup;
  forbiddenName1: RegExp = /admin/;
  forbiddenName2: RegExp = /administrator/;

  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      username: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        dynamicForbiddenUserNameValidator(this.forbiddenName1),
        dynamicForbiddenUserNameValidator(this.forbiddenName2),
      ]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control(''),
      confirmPassword: this.formBuilder.control(''),
      rememberMe: this.formBuilder.control(false),
    },{ validator: [confirmPasswordValidator] });

    this.signUpForm.get('rememberMe')?.valueChanges.subscribe(checked => {
      const emailControl = this.signUpForm.get('email');
      if (checked) {
        emailControl?.setValidators([Validators.required, Validators.email]);
      } else {
        emailControl?.clearValidators();
      }
      emailControl?.updateValueAndValidity();
    });
  }

  getcontrolName(controlName: string) {
    return this.signUpForm.get(controlName);
  }

  async onSubmitForm() {
    if (this.signUpForm.valid) {
      try {
        await this.authService.signUp(this.signUpForm.value.email, this.signUpForm.value.password);
        this.router.navigate(['/home']);
      } catch (error: any) {
        this.errorMessage = 'An error occurred during account creation';
      }
    }
  }
}

import { AbstractControl } from '@angular/forms';

//AbstractControl represents a form control or form group
export function confirmPasswordValidator(controls: AbstractControl) {
  const password = controls.get('password');
  const confirmPassword = controls.get('confirmPassword');

  //If either field is pristine (not touched), return null (no validation error)
  if (password?.pristine || confirmPassword?.pristine) {
    return null;
  }

  //If both fields have been touched, compare their values 
  //If the values don't match, return an error object {'passwordMismatch': true}
  //If the values match, return null (no validation error)
  return password && confirmPassword && password.value !== confirmPassword.value
    ? { passwordMismatch: true }
    : null;
}

import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CustomInputComponent} from "../../../shared/ui/custom-input/custom-input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from '../../../shared/services/authentication/authentication.service';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [
    RouterLink,
    CustomInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.css'
})
export class SigninFormComponent {
  constructor(private authenticationService: AuthenticationService) {}

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  onSubmitSignin() {
    const email = this.signinForm.value.email!;
    const password = this.signinForm.value.password!;

    this.authenticationService.login(email, password).subscribe(
      response => {
        console.log('User logged in');
      },
      error => {
        console.log('Error logging in');
      }
    );
  }

  get signinInfo() {
    return this.signinForm.controls;
  }
}

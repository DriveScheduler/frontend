import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CustomInputComponent} from "../../../shared/components/custom-input/custom-input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

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

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  onSubmitSignin() {
    return void 0;
  }

  get signinInfo() {
    return this.signinForm.controls;
  }
}

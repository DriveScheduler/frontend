import { Component } from '@angular/core';
import {CustomInputComponent} from "../../../shared/ui/custom-input/custom-input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-signup-form',
  standalone: true,
    imports: [
      CustomInputComponent,
      ReactiveFormsModule,
      RouterLink,
      CommonModule,
      FormsModule
    ],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  isParticulier: boolean = true;
  isMoniteur: boolean = false;

  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    drivingSchool: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
    licenseType: new FormControl('', Validators.required),
  })

  get signupInfo() {
    return this.signupForm.controls;
  }

  onSubmitSignup() {
    return void 0;
  }

  onCheckboxChange(type: string) {
    if (type === 'particulier') {
      this.isParticulier = true;
      this.isMoniteur = false;
    } else if (type === 'moniteur') {
      this.isParticulier = false;
      this.isMoniteur = true;
    }
  }
}

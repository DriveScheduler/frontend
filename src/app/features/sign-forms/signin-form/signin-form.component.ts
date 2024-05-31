import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {CustomInputComponent} from "src/app/shared/components/custom-input/custom-input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from 'src/app/shared/services/authentication/authentication.service';
import { CustomSnackbarService } from "src/app/shared/components/custom-snackbar/custom-snackbar.service";

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
  constructor(private authenticationService: AuthenticationService, private customSnackbar: CustomSnackbarService, private router: Router) {}

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  onSubmitSignin() {
    if (this.signinForm.invalid) {
      this.markFormGroupDirty(this.signinForm);
      this.customSnackbar.show('Veuillez renseigner tous les champs correctement.', 'error');
      return;
    }

    const email = this.signinForm.value.email!;
    const password = this.signinForm.value.password!;

    this.authenticationService.login(email, password).subscribe(
      response => {
        this.customSnackbar.show('Connexion réussie', 'success')
        this.router.navigateByUrl('/calendar');
      },
      error => {
        this.customSnackbar.show(error.error, 'error')
      }
    );
  }

  private markFormGroupDirty(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsDirty();

      if (control instanceof FormGroup) {
        this.markFormGroupDirty(control);
      }
    });
  }
}

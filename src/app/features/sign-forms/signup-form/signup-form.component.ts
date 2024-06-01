import {Component, OnInit} from '@angular/core';
import {CustomInputComponent} from "src/app/shared/components/custom-input/custom-input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import { CommonModule } from "@angular/common";
import {LicenceService} from "src/app/shared/services/licence/licence.service";
import {Licence} from "src/app/shared/models/licence";
import {Observable} from "rxjs";
import {UserService} from "src/app/shared/services/user/user.service";
import {CreateUser} from "src/app/shared/models/createUser";
import {CustomSnackbarService} from "src/app/shared/components/custom-snackbar/custom-snackbar.service";
import {FormUtilsService} from "src/app/shared/services/form_utils/form-utils.service";

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [
    CustomInputComponent,
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent implements OnInit {
  licences$!: Observable<Licence[]>;

  constructor(private formUtilsService: FormUtilsService, private customSnackbar: CustomSnackbarService, private router: Router, private licenceService: LicenceService, private userService: UserService) {}

  ngOnInit() {
    this.getLicences();
  }

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
    licenceType: new FormControl('', Validators.required),
    type: new FormControl(null, Validators.required)
  })

  onSubmitSignup() {
    if (this.signupForm.invalid) {
      this.formUtilsService.markFormGroupDirty(this.signupForm);
      this.customSnackbar.show('Veuillez renseigner tous les champs correctement.', 'error');
      return;
    }

    if(!this.passwordsAreMatching()) {
      this.customSnackbar.show('Les mots de passe ne correspondent pas.', 'error');
      return;
    }

    const user = this.convertFormGroupToUser(this.signupForm);
    this.userService.createUser(user).subscribe(
      () => {
        this.customSnackbar.show('Utilisateur créé !', 'success')
        this.router.navigateByUrl('/calendar');
      },
      (error) => this.customSnackbar.show(error.error, 'error')
    )
  }

  private passwordsAreMatching() : boolean {
    return this.signupForm.controls.password.value === this.signupForm.controls.passwordConfirmation.value
  }

  private convertFormGroupToUser(form: FormGroup) : CreateUser {
    return {
      id: '',
      name: form.value.name,
      firstName: form.value.firstName,
      email: form.value.email,
      password: form.value.password,
      licenceType: parseInt(form.value.licenceType, 10),
      type: form.value.type
    }
  }

  private getLicences() {
    this.licences$ = this.licenceService.getLicences();
  }
}

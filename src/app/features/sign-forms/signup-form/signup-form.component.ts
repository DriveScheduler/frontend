import {Component, OnInit} from '@angular/core';
import {CustomInputComponent} from "../../../shared/components/custom-input/custom-input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import { CommonModule } from "@angular/common";
import {LicenceService} from "../../../shared/services/licence/licence.service";
import {Licence} from "../../../shared/models/licence";
import {Observable} from "rxjs";
import {DrivingSchoolService} from "../../../shared/services/driving_school/driving-school.service";
import {DrivingSchool} from "../../../shared/models/driving-school";
import {UserService} from "../../../shared/services/user/user.service";
import {User} from "../../../shared/models/user";
import {CustomSnackbarService} from "../../../shared/components/custom-snackbar/custom-snackbar.service";

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
  drivingSchools$! : Observable<DrivingSchool[]>;

  constructor(private customSnackbar: CustomSnackbarService, private router: Router, private licenceService: LicenceService, private drivingSchoolService: DrivingSchoolService, private userService: UserService) {}

  ngOnInit() {
    this.getLicences();
    this.getDrivingSchools();
  }

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    drivingSchool: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
    licenceType: new FormControl('', Validators.required),
    type: new FormControl(null, Validators.required)
  })

  onSubmitSignup() {
    if (this.signupForm.invalid) {
      this.markFormGroupDirty(this.signupForm);
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
        setTimeout(() => this.router.navigate(['/']), 2000);
      },
      (error) => this.customSnackbar.show(error.error, 'error')
    )
  }

  private passwordsAreMatching() : boolean {
    return this.signupForm.controls.password.value === this.signupForm.controls.passwordConfirmation.value
  }

  private convertFormGroupToUser(form: FormGroup) : User {
    return {
      name: form.value.name,
      firstName: form.value.firstName,
      email: form.value.email,
      drivingSchool: form.value.drivingSchool,
      password: form.value.password,
      licenceType: parseInt(form.value.licenceType, 10),
      type: form.value.type
    }
  }

  private getLicences() {
    this.licences$ = this.licenceService.getLicences();
  }

  private getDrivingSchools() {
    this.drivingSchools$ = this.drivingSchoolService.getDrivingSchools();
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

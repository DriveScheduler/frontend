import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "src/app/shared/services/user/user.service";
import {Observable, Subscription} from "rxjs";
import {CommonModule} from "@angular/common";
import {CustomInputComponent} from "src/app/shared/components/custom-input/custom-input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {AuthenticationService} from "src/app/shared/services/authentication/authentication.service";
import {CustomSnackbarService} from "src/app/shared/components/custom-snackbar/custom-snackbar.service";
import {User} from "src/app/shared/models/user";
import {FormUtilsService} from "../../shared/services/form_utils/form-utils.service";


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, CustomInputComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit, OnDestroy {
  user!: User;
  userSubscription!: Subscription;

  constructor(private formUtilsService: FormUtilsService, private userService: UserService, private authenticationService: AuthenticationService, private router: Router, private customSnackbar: CustomSnackbarService) { }

  updateForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userSubscription = this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
  }

  onSubmitUpdate() {
    if (this.updateForm.invalid) {
      this.formUtilsService.markFormGroupDirty(this.updateForm);
      this.customSnackbar.show('Veuillez renseigner tous les champs correctement.', 'error');
      return;
    }

    const updatedUser = {
      firstName: this.updateForm.value.firstName!,
      name: this.updateForm.value.name!,
      email: this.updateForm.value.email!
    };

    if (updatedUser.firstName === this.user.firstName && updatedUser.name === this.user.name && updatedUser.email === this.user.email) {
      this.customSnackbar.show('Aucune modification n\'a été effectuée.', 'error');
      return;
    }

    this.userService.updateUser(updatedUser).subscribe(
      () => {
        this.customSnackbar.show('Utilisateur mis à jour !', 'success');
        this.getUser();
      },
      (error) => this.customSnackbar.show(error.error, 'error')
    )
  }

  restoreForm() {
    this.updateForm.patchValue(this.user);
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}

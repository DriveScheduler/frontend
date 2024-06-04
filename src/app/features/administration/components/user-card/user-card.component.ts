import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "src/app/shared/models/user";
import {AdministrationService} from "src/app/shared/services/administration.service";
import {CustomSnackbarService} from "src/app/shared/components/custom-snackbar/custom-snackbar.service";

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() user!: User;
  @Output() userDeleted: EventEmitter<string> = new EventEmitter<string>();

  constructor(private administrationService: AdministrationService, private customSnackbar: CustomSnackbarService) {
  }

  deleteUser() {
    this.administrationService.deleteUser(this.user.id).subscribe(
      response => {
        this.customSnackbar.show('Utilisateur supprimé !', 'success')
        this.userDeleted.emit(this.user.id);
      },
      error => {
        this.customSnackbar.show(error.error, 'error')
      });
  }
}

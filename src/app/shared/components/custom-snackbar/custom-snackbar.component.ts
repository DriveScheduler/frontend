import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-custom-snackbar',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './custom-snackbar.component.html',
  styleUrl: './custom-snackbar.component.css'
})
export class CustomSnackbarComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {

  }
}

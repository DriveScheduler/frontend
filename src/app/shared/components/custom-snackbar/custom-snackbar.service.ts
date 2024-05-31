import { Injectable } from '@angular/core';
import {CustomSnackbarComponent} from "./custom-snackbar.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  show(message: string, type: string) {
    this.snackBar.openFromComponent(CustomSnackbarComponent, {
      duration: 2000,
      horizontalPosition: 'right',
      data: {
        message: message,
        action: 'Fermer',
      },
      panelClass: `${type}_snackbar`
    });
  }
}

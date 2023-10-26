import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',  
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  openSnackbarWarn(message: string){
    this.openSnackbar(message, 'warn-snackbar');
  }

  openSnackbarSuccess(message: string){
    this.openSnackbar(message, 'success-snackbar');
  }

  private openSnackbar(message: string, cssClass: string) {
    this.snackbar.open(message, '', {
      duration: 3000,
      panelClass: [cssClass]
    });
  }
}

import { NgModule } from '@angular/core';

import { EuropcarComponent } from './europcar.component';
import { ButtonComponent } from './button/button/button.component';
import { IconButtonComponent } from './button/icon-button/icon-button.component';
import { TableComponent } from './table/table.component';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from './snackbar/snackbar.service';

@NgModule({
  declarations: [
    EuropcarComponent,
    ButtonComponent,
    IconButtonComponent,
    TableComponent,
    InputComponent,
    DialogDeleteComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    RouterModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    EuropcarComponent,
    ButtonComponent,
    IconButtonComponent,
    TableComponent,
    InputComponent,
    DialogDeleteComponent
  ],
  providers:[
    SnackbarService
  ]
})
export class EuropcarModule { }

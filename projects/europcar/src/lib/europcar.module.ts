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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    EuropcarComponent,
    ButtonComponent,
    IconButtonComponent,
    TableComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [
    EuropcarComponent,
    ButtonComponent,
    IconButtonComponent,
    TableComponent,
    InputComponent
  ]
})
export class EuropcarModule { }

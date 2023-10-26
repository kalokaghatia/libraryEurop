import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lib-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css'],  
})
export class DialogDeleteComponent{

  constructor( @Inject(MAT_DIALOG_DATA) public data:any ){
    this.tipoElemento = this.data.tipoElemento;
    this.elemento = this.data.elemento;
    this.metodoDelete = this.data.method;
  }


  tipoElemento:string;
  elemento:string;

  metodoDelete!:() => void;


}

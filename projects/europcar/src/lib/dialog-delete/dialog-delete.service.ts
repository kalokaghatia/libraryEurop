import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from './dialog-delete.component';

@Injectable({
  providedIn: 'root'
})
export class DialogDeleteService {

  constructor(private dialog:MatDialog) { }

  apriDialog(elemento:string, tipoElemento:string, method:any) {
      
    this.dialog.open(DialogDeleteComponent, {data:{elemento: elemento, tipoElemento:tipoElemento, method:method}});

  }
}
// export {DialogDeleteComponent}
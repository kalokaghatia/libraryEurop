import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from './dialog-delete.component';

@Injectable({
  providedIn: 'root'
})
export class DialogDeleteService {

  constructor(private dialog:MatDialog) { }

  apriDialog(elemento:string, method:any) { // () => void
      
    this.dialog.open(DialogDeleteComponent, {data:{messaggio: elemento, method:method}});

  }
}
// export {DialogDeleteComponent}
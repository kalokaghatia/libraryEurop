import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input()
  public elenco:any[]=[];
  @Input()
  public displayedColumns: string[] = [];
  @Input()
  public buttons: { color: string, icon: string, metodo: (arg: number) => void, link: string }[] = [];
  
  getValue(element: any, column: string): any {
    if (typeof element === 'object') {
      if (element && element.hasOwnProperty(column)) {
        return element[column];
      } else {
        return 'Proprieta mancante';
      }
    } else {
      return element;
    }
  }  
  
}

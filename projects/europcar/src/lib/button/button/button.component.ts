import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input()
  public testo:string='';
  @Input()
  public colore:string='';
  @Input()
  public sfondo:string='';
  @Input()
  public type:string='';
  
}
